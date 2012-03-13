/// <reference path="jquery-1.5.1-vsdoc.js" />
/// <reference path="jquery.validate-vsdoc.js" />
$(document).ready(function () {
    $("#btnRequestInvitation").hover(function () {
        $(this).attr('src', 'Content/images/request-invitation-hover.gif');
    },
    function () {
        $(this).attr('src', 'Content/images/request-invitation.gif');
    });
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
                    required: 'Enter your email address to receive your invite.',
                    email: 'Your email address must be in the format of name@domain.com'
                }
            },
            submitHandler: function (form) {
                submitSignup();
            },
            errorPlacement: function (error, element) {
                error.appendTo($('#output'));
                $('#output').show();
            }
        });
    });
});
var getBaseURL = function() {
    return location.protocol + "//" + location.hostname +
      (location.port && ":" + location.port) + "/";
}
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
                $('#txtEmailAddress').val('');
            }
            else {
                $('#output').html(data.message);
            }
            $('#output').show();
        },
        error: function (objRequest, next, errorThrown) {
            alert(objRequest.responseText);
        }
    });
}