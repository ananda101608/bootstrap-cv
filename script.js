// animasi (pusing)
AOS.init({
    duration: 1000, 
    easing: 'ease-in-out',
    once: true,   
    mirror: false
});

// efek tulisan di atas
const typed = new Typed('.typing-text', {
    strings: ['Siswa SMK', 'Rekayasa perangkat lunal', 'Freelancer',],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// transparan animasi navbar
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// auto close
const navLinks = document.querySelectorAll('.nav-link');
const menuToggle = document.getElementById('navbarNav');
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});

navLinks.forEach((l) => {
    l.addEventListener('click', () => {
        if(menuToggle.classList.contains('show')) {
            bsCollapse.toggle();
        }
    });
});
