const revealElements = document.querySelectorAll('.about, .model-card');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 100;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("reveal");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);




let scrollTimeout;
window.addEventListener('scroll', function() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function() {
        const header = document.getElementById('header');
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    }, 10);
});


document.querySelectorAll('.nav-link').forEach(link => {
    const section = link.dataset.section;

    link.addEventListener('click', function(e) {
        
        if (!section || section === 'register') return;

        
        e.preventDefault();
        const targetSection = document.getElementById(section);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
            history.pushState(null, null, `#${section}`);
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    
    preloadImages();
   
    const fadeElements = document.querySelectorAll('.fade-in');
   
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
            }
        });
    }, { threshold: 0.1 });
   
    fadeElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transition = 'opacity 0.5s ease-in-out';
        observer.observe(element);
    });
});






document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
   
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // anima só uma vez
            }
        });
    }, { threshold: 0.1 });
   
    fadeElements.forEach(element => {
        observer.observe(element);
    });
});






const btnTopo = document.getElementById("btnTopo");


btnTopo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});