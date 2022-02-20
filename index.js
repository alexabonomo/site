$(document).ready(function() {

    $(".slidingDiv").hide();
    $(".show_hide").show();

    $('.show_hide').click(function() {
          
         //$(".slidingDiv").slideToggle();
         var isvisible = $(this).next('.slidingDiv').is(':visible');
      
         if ( isvisible ) {
           $(this).next('.slidingDiv').hide();
         } else{
           $(this).next('.slidingDiv').show(); 
         }
    });

});