const $div07 = $('#div07');
const $div08 = $('#div08');

const $delay = 1000;

$("#slide-up1").click(function(){
    $("#div07").slideUp($delay);
});

$("#slide-down1").click(function(){
    $("#div07").slideDown($delay);
});

$("#slide-up2").click(function(){
    $("#div08").slideUp($delay);
});

$("#slide-down2").click(function(){
    $("#div08").slideDown($delay);
});