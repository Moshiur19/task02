(function ($){
    "use strict";

    jQuery(document).ready(function($){

       $(".embed-resposive iframe").addclass("embed-responsive-item");
       $(".carousel-inner .itemfirst-child").addclass("active");

       $('[data-toggle="tooltip"]').tooltip();

       $(".staff").owlcarousel({
            items:4,
            autoplay:false
       });

    });
    jQuery(window).load(function(){

    });
}(jQuery));