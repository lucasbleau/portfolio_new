// ============================================
// CUSTOM CURSOR
// ============================================
const cursorDot = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');
let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

if (window.matchMedia('(pointer: fine)').matches) {
    document.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    });

    document.addEventListener('mouseover', e => {
        if (e.target.closest('a, button')) cursorRing.classList.add('expanded');
    });

    document.addEventListener('mouseout', e => {
        if (e.target.closest('a, button')) cursorRing.classList.remove('expanded');
    });

    function animateCursor() {
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;
        cursorRing.style.left = ringX + 'px';
        cursorRing.style.top = ringY + 'px';
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
}

// ============================================
// MOBILE NAVIGATION
// ============================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ============================================
// NAVBAR SCROLL + PROGRESS + ACTIVE NAV
// ============================================
const navbar = document.getElementById('navbar');
const progressBar = document.getElementById('scrollProgress');
const sections = document.querySelectorAll('section[id]');

function highlightNav(scrollY) {
    sections.forEach(section => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        const link = document.querySelector(`.nav-link[href="#${id}"]`);
        if (link) {
            link.classList.toggle('active', scrollY >= top && scrollY < top + height);
        }
    });
}

function updateScroll() {
    const scrollY = window.pageYOffset;
    navbar.classList.toggle('scrolled', scrollY > 80);
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = ((scrollY / docHeight) * 100) + '%';
    highlightNav(scrollY);
}

window.addEventListener('scroll', updateScroll, { passive: true });
updateScroll();

// ============================================
// TABS (Parcours)
// ============================================
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.tab;
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(target).classList.add('active');
    });
});

// ============================================
// SCROLL REVEAL
// ============================================
const revealElements = document.querySelectorAll('.quality-card, .skill-level-block, .interest-card');

document.querySelectorAll('.qualities-grid, .interests-grid').forEach(group => {
    group.querySelectorAll('.quality-card, .interest-card').forEach((el, i) => {
        el.dataset.delay = (i * 0.08).toFixed(2);
    });
});

const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = parseFloat(entry.target.dataset.delay || 0);
            entry.target.style.transitionDelay = delay + 's';
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

revealElements.forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
});

console.log('%c👋 Bienvenue sur le portfolio de Lucas Bleau', 'color: #22d3ee; font-size: 16px; font-weight: bold;');
