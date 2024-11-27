/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }


/* ----- TYPING EFFECT ----- */
 var typingEffect = new Typed(".typedText",{
    strings : ["Full-Stack Developer","Frontend Developer","Open-Source Contributor"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
 })

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})

/* -- Experience box -- */
sr.reveal('.experience-box',{interval: 200})

/* -- PROJECT BOX -- */
sr.reveal('.projects-box',{delay: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)

 /* ---- Form validation -----*/

var form = document.getElementById('sheetdb-form')
var msg = document.getElementById('msg')

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(form.action, {
    method: 'POST',
    body:new FormData(document.getElementById('sheetdb-form'))
  }).then(
    response => {
      msg.innerHTML = "Message sent successfully"
      setTimeout(function () {
        msg.innerHTML=''
      }, 3000)
      form.reset()
    }
  )
})
 
// Function to create and show deployment message
function showDeploymentMessage() {
  // Create a new div for the deployment message
  const deploymentMessage = document.createElement('div');
  deploymentMessage.className = 'deployment-message';
  deploymentMessage.innerHTML = '<p>This project is under deployment. Please check back later for updates!</p>';
  document.body.appendChild(deploymentMessage);

  // Style the message
  deploymentMessage.style.position = 'fixed';
  deploymentMessage.style.top = '50%';
  deploymentMessage.style.left = '50%';
  deploymentMessage.style.transform = 'translate(-50%, -50%)';
  deploymentMessage.style.padding = '20px';
  deploymentMessage.style.background = '#fff';
  deploymentMessage.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
  deploymentMessage.style.zIndex = '1000';
  deploymentMessage.style.borderRadius = '10px';

  // Show the message for 3 seconds and then remove it
  setTimeout(() => {
    deploymentMessage.remove();
  }, 3000);
}

// Target only the e-commerce project link by its unique ID
const eCommerceProjectLink = document.querySelector('#ecommerce-project-link');

// Add click event listener only to the e-commerce project link
if (eCommerceProjectLink) {
  eCommerceProjectLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    showDeploymentMessage(); // Show the deployment message
  });
}
