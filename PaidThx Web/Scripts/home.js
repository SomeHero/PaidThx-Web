/// <reference path="jquery-1.5.1-vsdoc.js" />
/// <reference path="jquery.validate-vsdoc.js" />
$(document).ready(function () {

$('[placeholder]').focus(function() {
  var input = $(this);
  if (input.val() == input.attr('placeholder')) {
    input.val('');
    input.removeClass('placeholder');
  }
}).blur(function() {
  var input = $(this);
  if (input.val() == '' || input.val() == input.attr('placeholder')) {
    input.addClass('placeholder');
    input.val(input.attr('placeholder'));
  }
}).blur();

$('[placeholder]').parents('form').submit(function() {
  $(this).find('[placeholder]').each(function() {
    var input = $(this);
    if (input.val() == input.attr('placeholder')) {
      input.val('');
    }
  })
});

		$("a[rel^='prettyPhoto']").prettyPhoto({
			animation_speed: 'fast', /* fast/slow/normal */
			slideshow: 5000, /* false OR interval time in ms */
			autoplay_slideshow: false, /* true/false */
			opacity: 0.80, /* Value between 0 and 1 */
			show_title: false, /* true/false */
			allow_resize: true, /* Resize the photos bigger than viewport. true/false */
			default_width: 800,
			default_height: 481,
			counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
			theme: 'light_rounded', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
			horizontal_padding: 20, /* The padding on each side of the picture */
			hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
			wmode: 'opaque', /* Set the flash wmode attribute */
			autoplay: true, /* Automatically start videos: True/False */
			modal: false, /* If set to true, only the close button will close the window */
			deeplinking: true, /* Allow prettyPhoto to update the url to enable deeplinking. */
			overlay_gallery: true, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
			keyboard_shortcuts: true, /* Set to false if you open forms inside prettyPhoto */
			changepicturecallback: function(){
            _gaq.push(['_trackEvent', 'Video', 'Play']);
            }, /* Called everytime an item is shown/changed */
			callback: function(){}, /* Called when prettyPhoto is closed */
			ie6_fallback: true,
			markup: '<div class="pp_pic_holder"> \
						<div class="ppt">&nbsp;</div> \
						<div class="pp_top"> \
							<div class="pp_left"></div> \
							<div class="pp_middle"></div> \
							<div class="pp_right"></div> \
						</div> \
						<div class="pp_content_container"> \
							<div class="pp_left"> \
							<div class="pp_right"> \
								<div class="pp_content"> \
									<div class="pp_loaderIcon"></div> \
									<div class="pp_fade"> \
										<a href="#" class="pp_expand" title="Expand the image">Expand</a> \
										<div class="pp_hoverContainer"> \
											<a class="pp_next" href="#">next</a> \
											<a class="pp_previous" href="#">previous</a> \
										</div> \
										<div id="pp_full_res"></div> \
										<div class="pp_details"> \
											<div class="pp_nav"> \
												<a href="#" class="pp_arrow_previous">Previous</a> \
												<p class="currentTextHolder">0/0</p> \
												<a href="#" class="pp_arrow_next">Next</a> \
											</div> \
											<p class="pp_description"></p> \
											{pp_social} \
											<a class="pp_close" href="#">Close</a> \
										</div> \
									</div> \
								</div> \
							</div> \
							</div> \
						</div> \
						<div class="pp_bottom"> \
							<div class="pp_left"></div> \
							<div class="pp_middle"></div> \
							<div class="pp_right"></div> \
						</div> \
					</div> \
					<div class="pp_overlay"></div>',
			gallery_markup: '<div class="pp_gallery"> \
								<a href="#" class="pp_arrow_previous">Previous</a> \
								<div> \
									<ul> \
										{gallery} \
									</ul> \
								</div> \
								<a href="#" class="pp_arrow_next">Next</a> \
							</div>',
			image_markup: '<img id="fullResImage" src="{path}" />',
			flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
			quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
			iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
			inline_markup: '<div class="pp_inline">{content}</div>',
			custom_markup: '',
			social_tools: '<div class="pp_social"><div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="http://www.facebook.com/plugins/like.php?locale=en_US&href='+location.href+'&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div></div>' /* html or false to disable */
		});


$("div.item-wrapper").mouseover(function () {
    $(this).addClass("active");
}).mouseout(function () {
    $(this).removeClass("active");
});

    $(".home #btnRequestInvitation").hover(function () {
        $(this).attr('src', 'Content/images/request-invitation-hover.gif');
    },
    function () {
        $(this).attr('src', 'Content/images/request-invitation.gif');
    });


    //VALIDATION
    $("#btnRequestInvitation").live('click',function(){
    //$('.output-tip').qtip('destroy'); // Kill the tooltips
    //$('.output-tip-thanks').qtip('destroy'); 
    //$('.output-tip-existing').qtip('destroy'); 

        $("#beta-signup-form").validate({
            rules: {
                EmailAddress: {
                    required: true,
                    email: true
                }
            },
            messages: {
                EmailAddress: {
                    required: 'Enter your email address to receive your BETA invitation for PaidThx!',
                    email: 'Your email address must be in the format of name@domain.com'
                }
            },
            submitHandler: function (form) {
                submitSignup();
            },
            errorPlacement: function (error, element) {
                error.appendTo($('#output'));
                //$('#output').show();

                if (!error.is(':empty')) {




                    $('#txtEmailAddress').filter(':not(.valid)').qtip({
                        overwrite: false,
id: 'output-tip',
 content: {
 text: function () {
                    return $('#output').html();
                }
       },
    style: {
        classes: 'ui-tooltip-light ui-tooltip-shadow'
    },
    show: {
        event: false,
        ready: true,
        effect: function(offset) {
			$(this).slideDown(100); 
		}
    },
    hide: false,
    position: {
        my: 'top right',  
        at: 'bottom center', 
        adjust: {
            x: -20
        }
                
    }
})
.qtip('option', 'content.text', error);
}else{

$('#txtEmailAddress').qtip('destroy');

}

},
success: $.noop // Odd workaround
	});
                
        });
});
var getBaseURL = function () {
    return location.protocol + "//" + location.hostname +
      (location.port && ":" + location.port) + "/";
};
var submitSignup = function () {
    var serviceUrl = getBaseURL() + 'api/internal/api/BetaSignUps?apiKey=BDA11D91-7ADE-4DA1-855D-24ADFE39D174';
    var emailAddress = $("#txtEmailAddress").val();

    var signUpData = {
        "emailAddress": emailAddress
    };
    var jsonData = $.toJSON(signUpData);

    $.ajax({
        type: "POST",
        url: serviceUrl,
        data: jsonData,
        contentType: "application/json",
        dataType: "json",
        processData: false,
        complete: function(e, xhr, settings) {
            if(e.status == 201)
            {
                _gaq.push(['_trackEvent', 'BETA', 'Submit', 'New']);
                //$('#output').html(data.message);
                $('#txtEmailAddress').qtip({
                    overwrite: false,
                    id: 'output-tip-thanks',
                    content: {
                        text: 'Thanks for registering to be one of the first users of PaidThx, we\'ll be in touch shortly!'
                        },
                    style: {
                        classes: 'ui-tooltip-light ui-tooltip-shadow'
                    },
                    show: {
                        event: false,
                        ready: true,
                        effect: function (offset) {
                            $(this).slideDown(100);
                        }
                    },
                    hide: { 
                    event:false,
                    inactive: 20000,
                    },
                    position: {
                        my: 'top right',
                        at: 'bottom center',
                        adjust: {
                            x: -20
                        }

                    }
                })
            }
            else if(status == 500)
            {
                 _gaq.push(['_trackEvent', 'BETA', 'Submit', 'Error']);
                //$('#output').html(data.message);
                 $('#txtEmailAddress').qtip({
                    overwrite: false,
                    id: 'output-tip-existing',
                    content: {
                        text: 'Sorry we were able to process your invitation.  Send us an email.'
                        },
                    style: {
                        classes: 'ui-tooltip-light ui-tooltip-shadow'
                    },
                    show: {
                        event: false,
                        ready: true,
                        effect: function (offset) {
                            $(this).slideDown(100);
                        }
                    },
                    hide: { 
                    event:false,
                    inactive: 20000,
                    },
                    position: {
                        my: 'top right',
                        at: 'bottom center',
                        adjust: {
                            x: -20
                        }

                    }
                })
            }
           else {
            
                _gaq.push(['_trackEvent', 'BETA', 'Submit', 'Repeat']);
                //$('#output').html(data.message);
                 $('#txtEmailAddress').qtip({
                    overwrite: false,
                    id: 'output-tip-existing',
                    content: {
                        text: 'Hello again and thanks for your interest!  You\'ve successfully registered for our BETA invitation, we\'ll be back in touch shortly.'
                        },
                    style: {
                        classes: 'ui-tooltip-light ui-tooltip-shadow'
                    },
                    show: {
                        event: false,
                        ready: true,
                        effect: function (offset) {
                            $(this).slideDown(100);
                        }
                    },
                    hide: { 
                    event:false,
                    inactive: 20000,
                    },
                    position: {
                        my: 'top right',
                        at: 'bottom center',
                        adjust: {
                            x: -20
                        }

                    }
                })
            }
            //$('#output').show();
        }
    });

		

};