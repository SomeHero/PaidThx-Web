/// <reference path="jquery-1.5.1-vsdoc.js" />
/// <reference path="jquery.validate-vsdoc.js" />
$(document).ready(function () {
$("div.item-wrapper").mouseover(function () {
    $(this).addClass("active");
}).mouseout(function () {
    $(this).removeClass("active");
});

    $("#btnRequestInvitation").hover(function () {
        $(this).attr('src', 'Content/images/request-invitation-hover.gif');
    },
    function () {
        $(this).attr('src', 'Content/images/request-invitation.gif');
    });


    //VALIDATION
    $("#btnRequestInvitation").click(function () {
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
    var serviceUrl = getBaseURL() + 'services/BetaSignUpService/BetaSignUps?apiKey=BDA11D91-7ADE-4DA1-855D-24ADFE39D174';
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
        success: function (data) {
            if (data.success) {
                $('#output').html(data.message);
                $('#txtEmailAddress').qtip({
                    overwrite: false,
                    id: 'output-tip-thanks',
                    content: {
                        text: 'Thank you for your interest! You will receive an invitation when we think you are ready to experience PaidThx.'
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
                $('#output').html(data.message);
                 $('#txtEmailAddress').qtip({
                    overwrite: false,
                    id: 'output-tip-existing',
                    content: {
                        text: 'You must really want to try out PaidThx because this email is already registered for a BETA invite!'
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
        },
        error: function (objRequest, next, errorThrown) {
            alert(objRequest.responseText);
        }
    });
};