// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add hover animation to links
const links = document.querySelectorAll('.link-card');

links.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'scale(1.1)';
        link.style.transition = 'transform 0.3s ease-in-out';
    });

    link.addEventListener('mouseout', () => {
        link.style.transform = 'scale(1)';
    });
});

// Background animation
const body = document.body;
let hue = 0;

function animateBackground() {
    hue += 1;
    body.style.background = `linear-gradient(135deg, hsl(${hue}, 50%, 10%), hsl(${hue + 60}, 50%, 15%))`;
    requestAnimationFrame(animateBackground);
}

animateBackground();