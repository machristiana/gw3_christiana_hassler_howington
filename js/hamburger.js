https://codepen.io/joshuajcollinsworth/pen/NqqaXB?css-preprocessor=less

function toggleMenu() {
	$('#menu').slideToggle(300);
	$('.bg-cover').toggleClass('reveal');
	$('.bottom').toggleClass('hide');  //Added this line to toggle the hide class to hide the bottom hamburger button on menu open
	$('.slick-slider').toggleClass('opacity-hide'); // Added this line to hide slider on menu open
	$('.hamburger-shell').toggleClass('menu-open');
	var expanded = $('.hamburger-shell').attr('aria-expanded') == true;
	$('.hamburger-shell').attr('aria-expanded', !expanded);
}


$(document).ready(function(){
	$('.hamburger-shell').click(toggleMenu)
	$('.bg-cover').click(toggleMenu)
});
