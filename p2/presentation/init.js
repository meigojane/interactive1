$(document).ready(function(){

jQuery('.slide:eq(0)').addClass('current');

jQuery(document).keydown(function(e){
    switch(e.which) {
        case 38: // up
            var $current = jQuery('.slide.current'),
                $prev_embed = $current.prev();
            jQuery('html, body').animate({scrollTop:$prev_embed.offset().top}, 200);
            $current.removeClass('current');
            $prev_embed.addClass('current');
            return;
        break;


        case 40: // down
            var $current = jQuery('.slide.current'),
                $next_embed = $current.next();
            jQuery('html, body').animate({scrollTop:$next_embed.offset().top}, 200);
            $current.removeClass('current');
            $next_embed.addClass('current');
            return;
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault();
});

});