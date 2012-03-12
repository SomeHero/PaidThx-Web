/// <reference path="jquery-1.5.1-vsdoc.js" />
/// <reference path="jquery.validate-vsdoc.js" />
$(document).ready(function () {
    $("#btnRequestInvitation").hover(function () {
        $(this).attr('src', 'Content/images/request-invitation-hover.gif');
    },
    function () {
        $(this).attr('src', 'Content/images/request-invitation.gif');
    });
});