<!-- Homepage Article Fadein (http://jsfiddle.net/tcloninger/e5qaD/) -->
<script type="text/javascript">
    $(document).ready(function() {
    // Removes the `hideme` class from the first `<article>` on the page so it's readable on initial page load (without scroll)
    $("section:first-of-type article:first-of-type").removeClass("hideMe");
    // Every time the window is scrolled
        $(window).scroll( function(){
            // Check the location of each desired element
            $('.hideme').each( function(i){
                var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = 1.09*($(window).scrollTop() + $(window).height());
                if( bottom_of_window > bottom_of_object ){
                    $(this).animate({opacity: '1'},500);
                }
            });
        });
    });
</script>
