// function ShowHelloMessage() {
//     var name = document.getElementById("myname");
//     document.getElementById("hellomessage").innerHTML = "Hello, " + name.value;
// }
// document.getElementById("mybutton").onclick = ShowHelloMessage;

$(function () {
    window.sr = ScrollReveal();

    if ($(window).width() < 768) {
        if ($('.timeline-content').hasClass('js--fadeInLeft')) {
            $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
        }

        sr.reveal('.js--fadeInRight', {
            origin: 'right',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });

    } else {
        sr.reveal('.js--fadeInLeft', {
            origin: 'left',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
            reset: true, // Reset the animation when element leaves the viewport
        });

        sr.reveal('.js--fadeInRight', {
            origin: 'right',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
            reset: true, // Reset the animation when element leaves the viewport
        });
    }

    sr.reveal('.js--fadeInLeft', {
        origin: 'left',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
        reset: true, // Reset the animation when element leaves the viewport
    });

    sr.reveal('.js--fadeInRight', {
        origin: 'right',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
        reset: true, // Reset the animation when element leaves the viewport
    });
});


// $(function (){
    

//     window.sr = ScrollReveal();
  
//     if ($(window).width() < 768) {
  
//       if ($('.timeline-content').hasClass('js--fadeInLeft')) {
//         $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
//       }
  
//       sr.reveal('.js--fadeInRight', {
//         origin: 'right',
//         distance: '300px',
//         easing: 'ease-in-out',
//         duration: 800,
//       });
  
//     } else {
      
//       sr.reveal('.js--fadeInLeft', {
//         origin: 'left',
//         distance: '300px',
//         easing: 'ease-in-out',
//         duration: 800,
//       });
  
//       sr.reveal('.js--fadeInRight', {
//         origin: 'right',
//         distance: '300px',
//         easing: 'ease-in-out',
//         duration: 800,
//       });
  
//     }
    
//     sr.reveal('.js--fadeInLeft', {
//         origin: 'left',
//         distance: '300px',
//         easing: 'ease-in-out',
//         duration: 800,
//       });
  
//       sr.reveal('.js--fadeInRight', {
//         origin: 'right',
//         distance: '300px',
//         easing: 'ease-in-out',
//         duration: 800,
//       });
  
  
//   });
  