# 39K: İnfaz Timi

**Mahşer Sistemi'nde geçen, Türkçe bir taktiksel devriye/kill-team masaüstü savaş oyunu.**

39K: İnfaz Timi, *Shadow War: Armageddon*'dan esinlenilmiş, tamamen Türkçe kural seti ve terminolojiyle hazırlanmış özgün bir küçük ölçekli çatışma oyunudur. Oyun, kurgusal **Mahşer Sistemi**'nde geçer; 10 gezegen, 15 farklı fraksiyon ve kendi kriz zaman çizelgesiyle genişleyen bir arka plan evrenine sahiptir.

Bu depo, projenin statik GitHub Pages sitesinin kaynak kodunu barındırır: kurallar, roster (tim) oluşturucu, boyama rehberi, kaynakça ve terminoloji sözlüğü.

🔗 **Canlı site:** https://savasmasasi.github.io/infaztimi/

---

## İçindekiler

- [Site Haritası](#site-haritası)
- [Özellikler](#özellikler)
- [Teknik Yapı](#teknik-yapı)
- [Terminoloji Yaklaşımı](#terminoloji-yaklaşımı)
- [Katkıda Bulunma](#katkıda-bulunma)
- [Lisans](#lisans)
- [İletişim](#i̇letişim)

---

## Site Haritası

| Dosya | Açıklama |
|---|---|
| `index.html` | Ana giriş sayfası |
| `mahser.html` | Mahşer Sistemi arka planı: 10 gezegen, 15 fraksiyon, kriz zaman çizelgesi, Dramatis Personae |
| `tim-kur.html` | İnfaz timi (roster) oluşturucu — tamamen vanilla JS |
| `srd.html` | Sistem Referans Dokümanı (SRD) — tam kural metni |
| `boyama.html` | Miniatür boyama rehberi |
| `kaynaklar.html` | Kaynakça ve ilham alınan materyaller |
| `terimce.html` | Terminoloji sözlüğü ve çeviri gerekçeleri |

## Özellikler

- **Tam Türkçe kural seti** — İngilizce orijinalinden birebir çeviri değil, oyun diline uygun yerelleştirilmiş terminoloji
- **İnfaz timi oluşturucu** — tarayıcıda çalışan, kurulum gerektirmeyen roster inşa aracı
- **Zengin arka plan evreni** — 10 gezegen ve 15 fraksiyonu kapsayan Mahşer Sistemi lore'u
- **CC0 lisansı** — özgürce paylaşılabilir, uyarlanabilir ve topluluk katkısına açık

## Teknik Yapı

Site tamamen statik ve bağımlılıksızdır — build adımı gerektirmez, doğrudan `file://` protokolüyle de açılabilir.

- **Yazı tipleri:** PT Serif (gövde metni), Barlow Condensed (başlıklar), JetBrains Mono (istatistik/tablo verileri)
- **Vurgu rengi:** `#dc4e28`

## Terminoloji Yaklaşımı

Çeviri, birebir sözlük eşleştirmesi değil; Türkçe masaüstü oyun diline oturan, oynanışta akıcı bir terminoloji hedefler. Bazı örnekler:

- Strength → **kuvvet**, Toughness → **dayanım**, Wounds → **can**
- İsabet zarı / hasar zarı / yaralama zarı, liderlik, öncelik
- Aşamalar: hareket / atış / dövüş / toparlanma aşaması
- Durumlar: saf dışı, yere devrilmiş, yılgın, bozgun
- Roller: Komutan / Asker / Acemi / Uzman
- Fraksiyon ve yer adları yerelleştirilmiştir: Armageddon → **Mahşer**, Acheron → **Berzah**, Ghazghkull → **Gazkulu Demirbaş**, Von Strab → **Van Ştrap**

Çeviri kararlarının tam gerekçesi `terimce.html` sayfasında belgelenmiştir. Bazı terimler anlam yerine ses/ritim önceliğiyle seçilmiştir (ör. "kill team" → **infaz timi**).


## Katkıda Bulunma

Kural önerileri, hata bildirimleri, çeviri düzeltmeleri ve fraksiyon/senaryo katkıları memnuniyetle karşılanır. Bir issue açmadan önce lütfen `terimce.html` üzerinden mevcut terminoloji kararlarını gözden geçirin, böylece tutarlılık korunur.

Topluluk tartışmaları için [WH40KTR Discord sunucusu](https://discord.gg/x9WjgdqbX3) veya [WH40KTR Subreddit](https://www.reddit.com/r/Warhammer40KTR/)'i kullanılmaktadır.

## Lisans

Bu proje **CC0** lisansı altında paylaşılmaktadır. İçeriği paylaşabilir, uyarlayabilir ve ticari olmayan/ticari amaçla kullanabilirsiniz.

## İletişim

Sorularınız ve geri bildirimleriniz için Savaş Masası YouTube kanalı veya 4kTR / WH40KTR Discord sunucuları üzerinden ulaşabilirsiniz.
