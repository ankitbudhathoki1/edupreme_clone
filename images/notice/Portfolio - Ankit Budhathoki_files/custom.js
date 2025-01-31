// for dynamic text
new WOW().init();
const textArray = ["Frontend Developer", "Web Developer", "Graphic Designer", "Freelancer"];
const colors = ["#00d4ff", "#ff9800", "#6c63ff"];
let textIndex = 0, charIndex = 0, isDeleting = false;

function typeText() {
    const typedText = document.getElementById("typed-text");
    const currentText = textArray[textIndex];
    const color = colors[textIndex];
    typedText.style.color = color;

    if (isDeleting) charIndex--;
    else charIndex++;

    typedText.textContent = currentText.substring(0, charIndex);

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeText, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeText, 500);
    } else {
        setTimeout(typeText, isDeleting ? 50 : 100);
    }
}
document.addEventListener("DOMContentLoaded", typeText);


//  <!-- for navbar -->

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');
const navbarBreakpoint = 992; // Define the breakpoint for sticky behavior

// Scroll event to hide/show navbar on mobile devices
window.addEventListener('scroll', function () {
const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
const isMobile = window.innerWidth < navbarBreakpoint;

if (isMobile) {
if (currentScroll > lastScrollTop) {
    // Scrolling down: Hide navbar
    navbar.classList.add('navbar-hidden');
} else {
    // Scrolling up: Show navbar
    navbar.classList.remove('navbar-hidden');
}
} else {
// For screens above 992px, navbar hides on scrolling down and shows on scrolling up
if (currentScroll > lastScrollTop && currentScroll > 50) {
    // Scrolling down and at least 50px scrolled: Hide navbar
    navbar.classList.add('navbar-hidden');
} else if (currentScroll < lastScrollTop || currentScroll < 50) {
    // Scrolling up or less than 50px from top: Show navbar
    navbar.classList.remove('navbar-hidden');
}
}

lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll
});

// Collapse navbar when clicking on a nav link in mobile view
const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');

navbarLinks.forEach(link => {
link.addEventListener('click', () => {
// Check if navbar is open (expanded)
const isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';

if (isExpanded) {
    // Collapse the navbar (using Bootstrap's collapse functionality)
    navbarCollapse.classList.remove('show');
    navbarToggler.setAttribute('aria-expanded', 'false'); // Update toggler state
}
});
});

// visitor
document.addEventListener("DOMContentLoaded", () => {
const visitorCount = document.getElementById("visitor-count");
let count = 0;
const target = 213;

const incrementCounter = () => {
if (count < target) {
    count += 9;
    visitorCount.textContent = count;
    requestAnimationFrame(incrementCounter);
}
};

incrementCounter();
});


// owl caurosel
$('.events-slider').owlCarousel({
loop:true,
margin:10,
nav:false,
autoplay:true,
autoplayTimeout:3500,
responsive:{
   0:{
       items:1
   },
   800:{
       items:2
   },
   1000:{
       items:3
   },
   1400:{
       items:4 
   }
}
})


// clock
let digitalClock = () => {
    let date = new Date();
    let hour = date.getHours(0);
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let session = "AM";
    // let days = date.getDay()
    
    if(hour >= 12){
        if(hour > 12)
            hour = hour - 12;
        session = "PM";
    } else if(hour == 0){
        hour = 12;
        session;
    }
    hour = (hour < 10 ) ? "0" + hour : hour;
    minute = (minute < 10 ) ? "0" + minute : minute;
    second = (second < 10 ) ? "0" + second : second;
    
    let time = hour + ":" + minute + ":" + second + " " + session ;
    document.querySelector("#clockarea").innerHTML = time;
    
    setTimeout(() => {
        digitalClock();
    }, 1000);
    
    }
    digitalClock();
 
