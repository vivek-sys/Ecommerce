// app.js

// 1️⃣ Bounce animation for icons with the "bounce-icon" class
document.querySelectorAll('.bounce-icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.classList.add('fa-bounce');
    });
    icon.addEventListener('mouseleave', () => {
        icon.classList.remove('fa-bounce');
    });
});

// 2️⃣ Smooth scrolling for internal links
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// 3️⃣ Get Started Button Alert
const getStartedBtn = document.querySelector('.get-started');
if (getStartedBtn) {
    getStartedBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Thank you for your interest! We will guide you to the sign up page soon.');
    });
}

// 4️⃣ Highlight pricing packages on hover
const packages = document.querySelectorAll('.pricing .package');
packages.forEach(pkg => {
    pkg.addEventListener('mouseenter', () => {
        pkg.classList.add('highlight');
    });
    pkg.addEventListener('mouseleave', () => {
        pkg.classList.remove('highlight');
    });
});

// 5️⃣ Services hover effect
const services = document.querySelectorAll('.services .service');
services.forEach(service => {
    service.addEventListener('mouseenter', () => {
        service.classList.add('highlight');
    });
    service.addEventListener('mouseleave', () => {
        service.classList.remove('highlight');
    });
});

// 6️⃣ Show alerts on pricing package click
const pricingPackages = document.querySelectorAll('.pricing .package');

pricingPackages.forEach(pkg => {
    pkg.addEventListener('click', () => {
        const packageName = pkg.querySelector('h3').innerText;

        if (packageName === "Basic") {
            alert("You selected the Basic Package: $200/session, 1-hour photoshoot, 15 edited photos.");
        } else if (packageName === "Advanced") {
            alert("You selected the Advanced Package: $350/session, 2-hour photoshoot, 30 edited photos.");
        } else if (packageName === "Premium") {
            alert("You selected the Premium Package: $500/session, 3-hour photoshoot, 50 edited photos, album included.");
        }
    });
});


const serviceItems = document.querySelectorAll('.services .service');

serviceItems.forEach(service => {
    service.addEventListener('click', () => {
        const serviceName = service.querySelector('h3').innerText;

        if (serviceName === "Wedding Photography") {
            alert("You selected Wedding Photography: Capturing your special moments with elegance and style.");
        } else if (serviceName === "Portrait Photography") {
            alert("You selected Portrait Photography: Professional portraits for individuals, families, and corporate profiles.");
        } else if (serviceName === "Landscape Photography") {
            alert("You selected Landscape Photography: Beautiful nature and landscape shots for commercial and personal use.");
        }
    });
});
 

const contactForm = document.querySelector('.contact-section form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // prevent page reload
        alert('Thank you for reaching out! Your message has been sent successfully.');
        contactForm.reset(); // clear the form after submission
    });
}
