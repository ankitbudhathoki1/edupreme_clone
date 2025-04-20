$('.events-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:4000,
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

// settings for notice modal
$('document').ready(function(){
    $('#notice').modal('show')
    })


    // active
    const links = document.querySelectorAll(".nav-link");
    const dropDown = document.querySelectorAll(".dropdown-item");
    const currentUrl = window.location.href;
    
    links.forEach(link => {
        if (link.href === currentUrl) {
            link.classList.add("active");
        }
    });
    
    dropDown.forEach(link => {
        if (link.href === currentUrl) {
            link.classList.add("active");
    
            // Traverse up the DOM to find the parent dropdown link and add the "active" class
            let parentLink = link.closest('.nav-item').querySelector('.nav-link');
            if (parentLink) {
                parentLink.classList.add("active");
            }
        }
    });

