$(function(){

	$(".cat-list .details").hide();

	$(".cat-list a").click(showDetails);

	

});



function showDetails()

{	

	var id = $(this).attr("href");

	$(id).slideToggle();

	

	$(this).find("#carrot").toggleClass("fa fa-chevron-down").toggleClass("fa fa-chevron-up");

	return false;

}









;(function ($) {

    $('#main').smoothState();

})(jQuery);



/*

;(function($) {

  'use strict';

  var $body = $('html, body'),

      content = $('#page').smoothState({

        // Runs when a link has been activated

        onStart: {

          duration: 250, // Duration of our animation

          render: function (url, $container) {

            // toggleAnimationClass() is a public method

            // for restarting css animations with a class

            content.toggleAnimationClass('is-exiting');

            // Scroll user to the top

            $body.animate({

              scrollTop: 0

            });

          }

        }

      }).data('smoothState');

      //.data('smoothState') makes public methods available

})(jQuery);

*/