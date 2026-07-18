// SRD Page Navigation and Scroll Spy
document.addEventListener('DOMContentLoaded', () => {
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const sections = document.querySelectorAll('.srd-section');
    
    // Scroll spy functionality
    const observerOptions = {
        root: null,
        rootMargin: '-80px 0px -80% 0px',
        threshold: 0
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                const activeLink = document.querySelector(`.sidebar-link[href="#${id}"]`);
                
                sidebarLinks.forEach(link => link.classList.remove('active'));
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);
    
    sections.forEach(section => observer.observe(section));
    
    // Smooth scroll for sidebar links
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const yOffset = -80;
                const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                
                window.scrollTo({
                    top: y,
                    behavior: 'smooth'
                });
                
                // Update active link
                sidebarLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });
    
    // Set initial active link
    if (window.location.hash) {
        const initialLink = document.querySelector(`.sidebar-link[href="${window.location.hash}"]`);
        if (initialLink) {
            sidebarLinks.forEach(link => link.classList.remove('active'));
            initialLink.classList.add('active');
        }
    }
});
