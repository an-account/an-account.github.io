(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

})(jQuery); // End of use strict

(function($) {
  
  // contact form animations
  $('.register').click(function() {
    $('#contactForm').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#contactForm");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) {
        container.fadeOut();
    }
  });

  // contact form animations
  $('#get-in-touch').click(function() {
    $('#feedback').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#feedback");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) {
        container.fadeOut();
    }
  });

  $('#demo').click(function() {
    $('#get-demo').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#get-demo");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) {
        container.fadeOut();
    }
  });

  $('#register').submit(function(event) {
    event.preventDefault();
    var form = $(this);
    $.ajax({
       type: "POST",
       url: 'https://greenfly.ai:3001/register',
       data: form.serialize(),
       success: function(data)
       {
          console.log('success');
       }
    });
    $("#register").trigger("reset");
    $("#contactForm").fadeOut();
  })

  $('#feedback_form').submit(function(event) {
    event.preventDefault();
    var form = $(this);
    $.ajax({
       type: "POST",
       url: 'https://greenfly.ai:3001/feedback',
       data: form.serialize(),
       success: function(data)
       {
          console.log('success');
       }
    });
    $("#feedback_form").trigger("reset");
    $("#feedback").fadeOut();
  })

  $('#demo_form').submit(function(event) {
    event.preventDefault();
    var form = $(this);
    $.ajax({
       type: "POST",
       url: 'https://greenfly.ai:3001/demo',
       data: form.serialize(),
       success: function(data)
       {
          console.log('success');
       }
    });
    $("#demo_form").trigger("reset");
    $("#get-demo").fadeOut();
  })
  
})(jQuery);