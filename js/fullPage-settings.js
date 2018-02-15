$(document).ready(function() {
    $('.wrapper').fullpage({scrollingSpeed: 1500, loopBottom: true, controlArrows: false});
});

$('#moveToAdv').click(function(e){
    e.preventDefault();
    $.fn.fullpage.moveTo(2, 0);
});

$('#moveToEquip').click(function(e){
    e.preventDefault();
    $.fn.fullpage.moveTo(2, 1);
});

$('#moveToAdv--paginator').click(function(e){
    e.preventDefault();
    $.fn.fullpage.moveTo(2, 0);
});

$('#moveToEquip--paginator').click(function(e){
    e.preventDefault();
    $.fn.fullpage.moveTo(2, 1);
});

$('#moveToAdv--subHeader').click(function(e){
    e.preventDefault();
    $.fn.fullpage.moveTo(2, 0);
});

$('#moveToEquip--subHeader').click(function(e){
    e.preventDefault();
    $.fn.fullpage.moveTo(2, 1);
});

$('#moveToEquip--heroMenu').click(function(e){
    e.preventDefault();
    $.fn.fullpage.moveTo(2, 0);
});
