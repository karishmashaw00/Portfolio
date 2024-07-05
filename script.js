/*  SECTIONS ACTIVE LINK  */
const sections = document.querySelectorAll('section[id]');
const scrollActive = () =>{
  const scrollDown = window.scrollY;
  sections.forEach((current) =>{
    const sectionHeight = current.offsetHeight;
     const sectionTop = current.offsetTop - 50;
     const sectionId = current.getAttribute('id');
     sectionsClass = document.querySelector('.aside a[href*=' + sectionId + ']');

    if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
      sectionsClass.classList.add('active');
    }
    else{
      sectionsClass.classList.remove('active');
    }
  })
}
window.addEventListener('scroll', scrollActive);

/*  SCROLL REVEAL ANIMATION   */
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  })
  sr.reveal('.home-info, .skills-container, .contact-form')
  sr.reveal('.home-img', {delay: 600})
  sr.reveal('.about-text',{origin: 'right'});
  sr.reveal('.about-img',{origin: 'left'});
  sr.reveal('.project-box',{interval: 100});

  //  ASIDE TOGGLE 
  const navToggle = document.querySelector('.nav-toggler');
  navToggle.onclick = function (){
    navBar = document.querySelector(".nav");
    navBar.classList.toggle('nav-active');
  }

  // SEND EMAIL JS
  const contactForm = document.querySelector('.contact-form'),
   contactMsg = document.querySelector('.contact-message')

  const sendEmail = (e) =>{
    e.preventDefault();
    emailjs.sendForm('service_fdz4dlb','template_bdklfv2','#contact-form','tYFU2p5xv8TKCnh1w')
    .then(() => {
      contactMsg.innerHTML = 'Message Sent Successfully ✅ ';
      setTimeout(() =>{
        contactMsg.textContent = '';
      },5000)
      contactForm.reset();

    })

  }
  contactForm.addEventListener('submit', sendEmail);