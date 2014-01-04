function slabTextHeadlines() {
        $("h1.slabtext-container").slabText({
            // Don't slabtext the headers if the viewport is under 380px
            "viewportBreakpoint":300,
            "minCharsPerLine":10
        });
    };

     $(window).load(function() {
        setTimeout(slabTextHeadlines, 0);
    });


    $(document).ready(function(){
        //BACKSTRETCH
        $.backstretch("images/page-bg-img.jpg");
        
        //MASONRY
        var $container = $('.portfolio');
        $container.imagesLoaded(function(){
        $container.masonry({
            itemSelector : '.item',
            isFitWidth: true,
            isAnimated: true
            });
        });
        
        //PRETTYPHOTO
        $("a[rel^='prettyPhoto']").prettyPhoto({
            custom_markup: '<div class="pp_inline">SAMPLE</div>'
        });
        //$('h1.lettering span').lettering('lines');
        
        //TOOLTIPSTER PLUGIN
        $('.tooltip').tooltipster({
            animation: 'grow',
            delay: 100,
            position: 'top-left'
        });
        
        //Simple Modal
        $('a.contact').on('click', function(e){
            e.preventDefault();
             //$.modal("<div><iframe src='mailer.php'></iframe></div>");
             
            $.modal("<div class='modal-content'></div>", {
                onOpen: function(dialog){
                    alert(dialog);
                    // dialog.overlay.fadeIn('slow', function () {
                    //     dialog.container.slideDown('slow', function () {
                    //         dialog.data.fadeIn('slow');
                    //     });
                    // });
                },

                onShow: function (dialog) {
                    alert(dialog);
                    
                    // var request = $.ajax({
                    //     url: "mailer.php",
                    //     type: "POST",
                    //     dataType: "html"
                    // });
                    // request.done(function(msg) {
                    //     test = '<span>hiya</span>'
                    //     $(".modal-content").html( msg );
                    // });

                    // $.ajax({
                    //     url: "mailer.php",
                    //     type: "POST",
                    //     dataType: "html"
                    //     context: document.body
                    //     }).done(function( html ) {
                    //         $(".modal-content").append('hiya');
                    //     });
                    // });
                }
            });
            
            /*
            $(this).modal({
                onShow: function (dialog) {
                    alert(dialog)
                }
            });
            
            
            */
        })
     });