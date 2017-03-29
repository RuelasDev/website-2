/* NAVIGATION SMOOTHSCROLL */

$(".nav-menu  a").click(function (e) {
  var link = $(this).attr('href');
  
  $('html, body').animate({
    
    scrollTop: $(link).offset().top
    
  });

  e.preventDefault();
  
});


/* MOBILE MENU */

$(".mobile-menu").click(function () {
  
  if ($('.nav-menu ul').hasClass('open')) {
     
     $('.nav-menu ul').removeClass('open');
     }

else {
  $('.nav-menu ul').addClass('open');
}
  
  
});


/* LIGHTBOX */


// create overlay
var $overlay = $("<div class='overlay'></div>");



//hide overlay
$overlay.hide();

//show overlay when user clicks on a specific column
$(".column").click( function (event) {
  event.preventDefault();
  
  // capture id of column and prepend overlay to specific id
  var link =  $(this).attr('id');
  $('#' + link).prepend($overlay);
  
  //message that will appear on specific picture user clicks on
  switch(link) {
      
    case 'col1':
      $overlay.html('<h1 class="colmessage">Includes</h1><br> • 4 Daises<br> • 6 Asters<br> • 2 Astilbe<br> • 4 Balloon Flowers');
      break;
    case 'col2':
      $overlay.html('<h1 class="colmessage">Includes</h1><br> • a Dozen fresh Red Roses');
      break;
    case 'col3':
      $overlay.html('<h1 class="colmessage">Includes</h1><br> • 12 delightful Orange Canterbury Bells');
      break;
    case 'col4':
      $overlay.html('<h1 class="colmessage">Includes</h1><br> • 8 Beautiful Begonia Flowers');
      break;
    case 'col5':
      $overlay.html('<h1 class="colmessage">Includes</h1><br> • 10 Morning Glory Flowers');
      break;
    case 'col6':
      $overlay.html('<h1 class="colmessage">Includes</h1><br> • a random selection of 12 flowers<br> anything from Roses to Begonia Flowers');
      break;
  }
  
  
  //show overlay
  $overlay.toggle();
});


