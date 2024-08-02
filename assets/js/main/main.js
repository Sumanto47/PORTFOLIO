/* ------------------------------------------------------ SCRIPT FOR SCROLL-TO-TOP SECTION (INIT) START----------------------------------------------------- */
   var scrollToTopBtn = document.querySelector(".scrollToTopBtn")
   var rootElement = document.documentElement

   function handleScroll() {

      var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
      if ((rootElement.scrollTop / scrollTotal) > 0.15) {
         scrollToTopBtn.classList.add("showBtn")
      } else {
         scrollToTopBtn.classList.remove("showBtn")
      }
   }

   function scrollToTop() {

      rootElement.scrollTo({
         top: 0,
         behavior: "smooth"
      })
   }
   scrollToTopBtn.addEventListener("click", scrollToTop)
   document.addEventListener("scroll", handleScroll)
/* ------------------------------------------------------ SCRIPT FOR SCROLL-TO-TOP SECTION (INIT) COMPLETE----------------------------------------------------- */


/* ------------------------------------------------- SCRIPT FOR HEADER-TOGGLE (INIT) START -------------------------------------------------------------- */

   function openNavigation() {
      document.getElementById("mySideNavigation").style.height = "100%";
      document.getElementById("mySideNavigation").style.top = "0";
   }

   function closeNavigation() {
      document.getElementById("mySideNavigation").style.height = "0";
      document.getElementById("mySideNavigation").style.top = "30%";
   }   

   document.getElementById('still-bar').addEventListener(
      'click',
      function () {
         this.classList.toggle('change');
      }
   );
/* --------------------------------------------- SCRIPT FOR HEADER-TOGGLE (INIT)  COMPLETE --------------------------------------------------------- */


/* ----------------------------------------------- SCRIPT FOR STICKY-HEADER (INIT) COMPLETE ------------------------------------- */
   $(window).scroll(function () {
      if ($(this).scrollTop() > 1) {
         $('.bottom-header').addClass("sticky");
      }
      else {
         $('.bottom-header').removeClass("sticky");
      }
   });
/* ----------------------------------------------- SCRIPT FOR STICKY-HEADER (INIT) COMPLETE ------------------------------------- */


/* ------------------------------------------------------ SCRIPT FOR PRELOADER (INIT) START ------------------------------------------------------------------- */
   document.addEventListener("DOMContentLoaded", function () {
      jQuery(function ($) {
         setTimeout(function () {
            $("body").addClass("laLoaded");
         }, 5000);
      });
   });
/* ----------------------------------------------------- SCRIPT FOR PRELOADER (INIT) COMPLETE ---------------------------------------------------------------- */


/* ----------------------------------- SCRIPT FOR DATA-AOS START ------------------------------------------------- */
   AOS.init({
      offset: 200,
      delay: 0,
      duration: 1400,
      easing: 'ease',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
   }
   );
/* ------------------------------------- SCRIPT FOR DATA-AOS (INIT) COMPLETED ------------------------------------------- */


/* ----------------------------------------- SCRIPT FOR TYPING-TEXT (INIT) START ---------------------------------------------- */
   var typing = new Typed(".text", {
      strings: ["", "Font-end", "Graphics", "Freelancer..."],
      typeSpeed: 70,
      backSpeed: 50,
      loop: true,
   });
/* ------------------------------------------- SCRIPT FOR TYPING-TEXT (INIT) COMPLETE ------------------------------------------ */


/* ----------------------------------------- SCRIPT FOR COUNTER-JS (INIT) START ---------------------------------------------- */
   var counted = 0;
   $(window).scroll(function () {

      var oTop = $('#counter').offset().top - window.innerHeight;
      if (counted == 0 && $(window).scrollTop() > oTop) {
         $('.count').each(function () {
            var $this = $(this),
               countTo = $this.attr('data-count');
            $({
               countNum: $this.text()
            }).animate({
               countNum: countTo
            },

               {
                  duration: 6000,
                  easing: 'swing',
                  step: function () {
                     $this.text(Math.floor(this.countNum));
                  },
                  complete: function () {
                     $this.text(this.countNum);
                     //alert('finished');
                  }

               });
         });
         counted = 1;
      }
   });
/* ------------------------------------------ SCRIPT FOR COUNTER-JS (INIT) COMPLETE ------------------------------------------ */



/* ----------------------------------------- SCRIPT FOR OWL-CAROUSEL (INIT) START ---------------------------------------------- */
   $('.owl-carousel').owlCarousel({
      stagePadding: 0,
      loop: true,
      autoplay: 4000,
      autoplayTimeout: 4000,
      autoplaySpeed: 4000,
      nav: false,
      dots: false,
      responsive: {
         0: {
            items: 1
         },
         600: {
            items: 1
         },
         1000: {
            items: 1
         }
      }
   })
/* ------------------------------------------- SCRIPT FOR OWL-CAROUSEL (INIT) COMPLETE ------------------------------------------ */