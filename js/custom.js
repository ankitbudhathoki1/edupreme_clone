$('.events-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:false,
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