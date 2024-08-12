// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile Navigation Toggle
const navToggle = document.createElement('div');
navToggle.classList.add('nav-toggle');
navToggle.innerHTML = '☰';
document.body.insertBefore(navToggle, document.querySelector('nav'));

navToggle.addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('open');
    navToggle.classList.toggle('open');
});

// Scroll-Triggered Animations
const sections = document.querySelectorAll('section');

const options = {
    root: null,
    threshold: 0.25,
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});
