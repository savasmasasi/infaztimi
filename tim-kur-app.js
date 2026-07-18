// Tim Kur — 39,000: İnfaz Timi
// Vanilla JS team/roster builder. No frameworks, no CDN dependencies.
// Works from file:// (double-click) as well as any static host (GitHub Pages, etc).

(function () {
    'use strict';

    const STAT_ORDER = ['M', 'WS', 'BS', 'S', 'T', 'W', 'I', 'A', 'Ld'];
    const STAT_LABEL = { M: 'HRK', WS: 'DVŞ', BS: 'ATŞ', S: 'KUV', T: 'DYN', W: 'CAN', I: 'ÖNC', A: 'SAL', Ld: 'LDR' };
    const ROLE_LABEL = {
        leader: 'Komutan',
        trooper: 'Er',
        recruit: 'Acemi',
        specialist: 'Uzman',
        drone: 'Drone',
    };

    /** @type {{factionKey: string, fighterIndex: number, uniqueId: number, gear: {category:string, name:string, cost:number}[]}[]} */
    let roster = [];
    let selectedFactionKey = null;
    /** Currently open recruitment card (fighter being configured before adding) */
    let pendingFighterIndex = null;
    let pendingGear = []; // [{category, name, cost}]

    const factionSelectorEl = document.getElementById('factionSelector');
    const rosterContentEl = document.getElementById('rosterContent');
    const recruitmentAreaEl = document.getElementById('recruitmentArea');

    function statsLine(stats) {
        return STAT_ORDER
            .filter((k) => stats[k] !== undefined)
            .map((k) => `${STAT_LABEL[k]}:${stats[k]}`)
            .join(' ');
    }

    function fighterTotalCost(fighter, gear) {
        return fighter.cost + gear.reduce((sum, g) => sum + g.cost, 0);
    }

    // ---------- Rendering: faction list ----------
    function renderFactionList() {
        factionSelectorEl.innerHTML = '<h2 class="faction-title">Faksiyon Seç</h2>';
        const rosterFactionKey = roster.length > 0 ? roster[0].factionKey : null;

        Object.keys(FACTIONS).forEach((key) => {
            const faction = FACTIONS[key];
            const btn = document.createElement('button');
            const isLockedOut = rosterFactionKey !== null && key !== rosterFactionKey;
            btn.className = 'faction-button'
                + (key === selectedFactionKey ? ' active' : '')
                + (isLockedOut ? ' is-locked' : '');
            btn.textContent = faction.label;
            btn.addEventListener('click', () => {
                if (isLockedOut) {
                    const ok = confirm(
                        `Tim listen "${FACTIONS[rosterFactionKey].label}" faksiyonundan savaşçılar içeriyor. Bir kill team tek bir faksiyondan kurulur — başka bir faksiyona geçmek mevcut tim listeni temizleyecek. Devam edilsin mi?`
                    );
                    if (!ok) return;
                    roster = [];
                }
                selectedFactionKey = key;
                pendingFighterIndex = null;
                pendingGear = [];
                renderAll();
            });
            factionSelectorEl.appendChild(btn);
        });
    }

    // ---------- Rendering: roster ----------
    function renderRoster() {
        const rosterFactionTagEl = document.getElementById('rosterFactionTag');
        if (rosterFactionTagEl) {
            rosterFactionTagEl.textContent = roster.length > 0 ? `— ${FACTIONS[roster[0].factionKey].label}` : '';
        }

        if (roster.length === 0) {
            rosterContentEl.innerHTML = '<div class="roster-empty"><p>Henüz savaşçı eklemedin. Faksiyon seç ve savaşçı ekle.</p></div>';
            return;
        }

        const list = document.createElement('div');
        list.className = 'fighter-list';

        roster.forEach((entry) => {
            const faction = FACTIONS[entry.factionKey];
            const fighter = faction.fighters[entry.fighterIndex];
            const total = fighterTotalCost(fighter, entry.gear);

            const card = document.createElement('div');
            card.className = 'fighter-card';

            const info = document.createElement('div');
            info.className = 'fighter-info';
            info.innerHTML = `
                <span class="fighter-role-tag">${ROLE_LABEL[fighter.role] || fighter.role}</span>
                <h3>${fighter.name}</h3>
                <div class="fighter-stats">${statsLine(fighter.stats)}</div>
                <div class="fighter-gear-line">${fighter.wargear}</div>
                ${entry.gear.length ? `<div class="fighter-extras">+ ${entry.gear.map((g) => `${g.name} (${g.cost}p)`).join(', ')}</div>` : ''}
            `;

            const side = document.createElement('div');
            side.className = 'fighter-side';

            const cost = document.createElement('div');
            cost.className = 'fighter-cost';
            cost.textContent = `${total} puan`;

            const removeBtn = document.createElement('button');
            removeBtn.className = 'remove-button';
            removeBtn.textContent = 'Çıkar';
            removeBtn.addEventListener('click', () => {
                roster = roster.filter((r) => r.uniqueId !== entry.uniqueId);
                renderAll();
            });

            side.appendChild(cost);
            side.appendChild(removeBtn);
            card.appendChild(info);
            card.appendChild(side);
            list.appendChild(card);
        });

        rosterContentEl.innerHTML = '';
        rosterContentEl.appendChild(list);

        const totalCost = roster.reduce((sum, entry) => {
            const faction = FACTIONS[entry.factionKey];
            const fighter = faction.fighters[entry.fighterIndex];
            return sum + fighterTotalCost(fighter, entry.gear);
        }, 0);

        const summary = document.createElement('div');
        summary.className = 'roster-summary';
        summary.innerHTML = `
            <div>
                <div class="summary-label">Toplam Savaşçı</div>
                <div class="summary-stat">${roster.length}</div>
            </div>
            <div>
                <div class="summary-label">Toplam Maliyet</div>
                <div class="summary-stat">${totalCost} puan</div>
            </div>
            <div class="summary-actions">
                <button class="reset-button" id="resetRosterBtn">Tümünü Temizle</button>
                <button class="export-button" id="exportRosterBtn">TXT Olarak İndir</button>
            </div>
        `;
        rosterContentEl.appendChild(summary);

        document.getElementById('exportRosterBtn').addEventListener('click', exportRosterToTxt);
        document.getElementById('resetRosterBtn').addEventListener('click', () => {
            if (roster.length === 0) return;
            if (confirm('Tüm tim listesini temizlemek istediğine emin misin?')) {
                roster = [];
                renderAll();
            }
        });
    }

    // ---------- Rendering: recruitment (available fighters + gear picker) ----------
    function renderRecruitment() {
        recruitmentAreaEl.innerHTML = '';
        if (!selectedFactionKey) return;

        const faction = FACTIONS[selectedFactionKey];

        const headerRow = document.createElement('div');
        headerRow.className = 'section-heading-row';
        headerRow.innerHTML = `<h2 class="section-heading" style="font-size:1rem; padding:0.4rem 0;">Mevcut Savaşçılar — ${faction.label}</h2>`;
        recruitmentAreaEl.appendChild(headerRow);

        const grid = document.createElement('div');
        grid.className = 'available-fighters';

        faction.fighters.forEach((fighter, idx) => {
            const card = document.createElement('div');
            card.className = 'available-fighter' + (pendingFighterIndex === idx ? ' is-selected' : '');
            card.innerHTML = `
                <span class="role-tag">${ROLE_LABEL[fighter.role] || fighter.role}</span>
                <h4>${fighter.name}</h4>
                <div class="stats-line">${statsLine(fighter.stats)}</div>
                <div class="cost">${fighter.cost} puan</div>
            `;
            card.addEventListener('click', () => {
                pendingFighterIndex = idx;
                pendingGear = [];
                renderRecruitment();
                const picker = document.getElementById('gearPicker');
                if (picker && typeof picker.scrollIntoView === 'function') {
                    picker.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            });
            grid.appendChild(card);
        });

        recruitmentAreaEl.appendChild(grid);

        if (pendingFighterIndex !== null) {
            recruitmentAreaEl.appendChild(buildGearPicker(faction));
        }
    }

    function buildGearPicker(faction) {
        const fighter = faction.fighters[pendingFighterIndex];
        const wrapper = document.createElement('div');
        wrapper.className = 'gear-picker';
        wrapper.id = 'gearPicker';

        const header = document.createElement('div');
        header.className = 'gear-picker-header';
        header.innerHTML = `
            <div class="gear-picker-title">${fighter.name} — Donanım Seç</div>
            <div class="gear-picker-base">Temel: ${fighter.wargear} (${fighter.cost} puan)</div>
        `;
        wrapper.appendChild(header);

        const categories = faction.weapons || {};
        Object.keys(categories).forEach((categoryName) => {
            const catEl = document.createElement('div');
            catEl.className = 'gear-category';
            catEl.innerHTML = `<div class="gear-category-label">${categoryName}</div>`;

            const optionsEl = document.createElement('div');
            optionsEl.className = 'gear-options';

            categories[categoryName].forEach(([itemName, itemCost]) => {
                const isActive = pendingGear.some((g) => g.category === categoryName && g.name === itemName);
                const chip = document.createElement('button');
                chip.type = 'button';
                chip.className = 'gear-chip' + (isActive ? ' is-active' : '');
                chip.innerHTML = `${itemName} <span class="gear-cost">${itemCost}p</span>`;
                chip.addEventListener('click', () => {
                    const existingIdx = pendingGear.findIndex((g) => g.category === categoryName && g.name === itemName);
                    if (existingIdx >= 0) {
                        pendingGear.splice(existingIdx, 1);
                    } else {
                        pendingGear.push({ category: categoryName, name: itemName, cost: itemCost });
                    }
                    renderRecruitment();
                });
                optionsEl.appendChild(chip);
            });

            catEl.appendChild(optionsEl);
            wrapper.appendChild(catEl);
        });

        const confirmRow = document.createElement('div');
        confirmRow.className = 'gear-confirm-row';
        const runningTotal = fighterTotalCost(fighter, pendingGear);
        confirmRow.innerHTML = `<div class="gear-running-total">Toplam: <strong>${runningTotal} puan</strong></div>`;

        const addBtn = document.createElement('button');
        addBtn.className = 'add-fighter-button';
        addBtn.textContent = 'Tim Listesine Ekle';
        addBtn.addEventListener('click', () => {
            roster.push({
                factionKey: selectedFactionKey,
                fighterIndex: pendingFighterIndex,
                uniqueId: Date.now() + Math.random(),
                gear: pendingGear.slice(),
            });
            pendingFighterIndex = null;
            pendingGear = [];
            renderAll();
        });
        confirmRow.appendChild(addBtn);
        wrapper.appendChild(confirmRow);

        return wrapper;
    }

    // ---------- Export ----------
    function exportRosterToTxt() {
        const byFaction = {};
        roster.forEach((entry) => {
            byFaction[entry.factionKey] = byFaction[entry.factionKey] || [];
            byFaction[entry.factionKey].push(entry);
        });

        const totalCost = roster.reduce((sum, entry) => {
            const faction = FACTIONS[entry.factionKey];
            const fighter = faction.fighters[entry.fighterIndex];
            return sum + fighterTotalCost(fighter, entry.gear);
        }, 0);

        const factionKeys = Object.keys(byFaction);
        const singleFactionLabel = factionKeys.length === 1 ? FACTIONS[factionKeys[0]].label : null;

        let txt = '========================================\n';
        txt += '39,000: İNFAZ TİMİ - TİM LİSTESİ\n';
        txt += '========================================\n\n';
        if (singleFactionLabel) {
            txt += `Faksiyon: ${singleFactionLabel}\n`;
        }
        txt += `Toplam Savaşçı: ${roster.length}\n`;
        txt += `Toplam Maliyet: ${totalCost} puan\n\n`;

        factionKeys.forEach((factionKey) => {
            const faction = FACTIONS[factionKey];
            // Only print a per-group faction header if there's more than one (shouldn't normally happen,
            // since the UI enforces a single-faction roster, but this keeps the export sane if that ever changes).
            if (factionKeys.length > 1) {
                txt += '----------------------------------------\n';
                txt += `FAKSİYON: ${faction.label}\n`;
                txt += '----------------------------------------\n\n';
            }

            byFaction[factionKey].forEach((entry, idx) => {
                const fighter = faction.fighters[entry.fighterIndex];
                const total = fighterTotalCost(fighter, entry.gear);
                txt += `${idx + 1}. ${fighter.name} (${ROLE_LABEL[fighter.role] || fighter.role})\n`;
                txt += `   ${statsLine(fighter.stats)}\n`;
                txt += `   Temel Donanım: ${fighter.wargear}\n`;
                if (entry.gear.length) {
                    txt += `   Ek Donanım: ${entry.gear.map((g) => `${g.name} (${g.cost}p)`).join(', ')}\n`;
                }
                txt += `   Maliyet: ${total} puan\n\n`;
            });
        });

        txt += '----------------------------------------\n';
        txt += `TOPLAM: ${totalCost} puan (${roster.length} savaşçı)\n`;
        txt += '========================================\n';

        const blob = new Blob([txt], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        const slug = singleFactionLabel
            ? singleFactionLabel.toLowerCase().replace(/ı/g, 'i').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
            : 'tim';
        a.download = `infaz-timi-${slug}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    // ---------- Master render ----------
    function renderAll() {
        renderFactionList();
        renderRoster();
        renderRecruitment();
    }

    document.addEventListener('DOMContentLoaded', renderAll);
})();
