/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show');
        });
    }
}
showMenu('nav-toggle','nav-menu');

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show class
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () =>{
    const scrollDown = window.scrollY;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link');
        }else{
            sectionsClass.classList.remove('active-link');
        }                                                    
    });
}
window.addEventListener('scroll', scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    // reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

/*==================== CONTACT FORM HANDLER ====================*/
const contactForm = document.querySelector('.contact__form');
const contactButton = document.querySelector('.contact__button');

if(contactForm && contactButton){
    contactButton.addEventListener('click', (e) => {
        e.preventDefault(); // prevent page reload

        const name = contactForm.querySelector('input[name="name"]')?.value || '';
        const email = contactForm.querySelector('input[name="email"]')?.value || '';
        const message = contactForm.querySelector('textarea[name="message"]')?.value || '';

        if(!name || !email || !message){
            alert('Please fill in all fields 😅');
            return;
        }

        // Neon popup effect (simple alert for now)
        alert(`✨ Message sent! \nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

        // Reset form
        contactForm.reset();
    });
}

/*==================== HOME BUTTON SCROLL ====================*/
const homeContactBtn = document.getElementById('home-contact-btn');
const contactSection = document.getElementById('contact');

if(homeContactBtn && contactSection){
    homeContactBtn.addEventListener('click', (e) => {
        e.preventDefault();

        // Smooth scroll to contact section
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
}
