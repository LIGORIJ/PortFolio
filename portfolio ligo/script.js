var typed = new Typed(".multiple-text", {
  strings: [" Frontend Developer", " BackEnd Developer", " Software Developer","FullStack Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});


document.querySelectorAll('.navbar a').forEach((link) => {
  link.addEventListener('click', () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  });
});





let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset+height) { // Fix the condition
      navLinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
      });
      
    }
  });
};


let header=document.querySelector('header');

header.classList.toggle('sticky',window.scrollY > 100);




ScrollReveal({ reset: true,
distance: '80px',
duration: 2000,
delay: 200});


ScrollReveal().reveal('.heading',{origin:'top'});
ScrollReveal().reveal('.contact form',{origin:'bottom'});
ScrollReveal().reveal('.about-img',{delay:600,origin:'left'});
ScrollReveal().reveal('.about-content',{origin:'right'});
ScrollReveal().reveal('.skills',{origin:'right'});




//  *    EMAIL CONFIUGURATION


function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
    phoneNumber:document.getElementById("phoneNumber").value,
    subject:document.getElementById("subject").value
  };

  const serviceID = "service_7ac8jfr";
  const templateID = "template_8bg06qs";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        document.getElementById("phoneNumber").value="";
        document.getElementById("subject").value="";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}


document.getElementById("myForm").addEventListener("submit", function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();
});
