// JavaScript Document
$(".myheroBtn").click(function() {
    $('html,body').animate({
        scrollTop: $("#myScroll").offset().top},
        'slow');
});

$('.myLink').on('click', function (e) {
    e.stopPropagation();
});