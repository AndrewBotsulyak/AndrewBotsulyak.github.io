import './scss/main.scss';
import './scss/header.scss';
import './scss/fonts.scss';
import './scss/vars.scss';
import './scss/top.scss';
import './scss/about.scss';
import './scss/practice.scss';
import './scss/lawyers.scss';
import './scss/clients.scss';
import './scss/public.scss';
import './scss/faq.scss';
import './scss/contact.scss';
import './scss/footer.scss';
import './css/hamburgers.min.css';

import $ from 'jquery';

// OWL CAROUSEL

import './css/owl/owl.carousel.min.css';
import 'owl.carousel';

import './js/plugins/smooth-scroll.min.js';


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items:1,
  	loop:true,
    margin:10,
    responsiveClass:true,
    responsive:false
  });


 // Accordeon
(function(){
	if(document.documentElement.clientWidth > 1100){
	  $('.faq-wrap-accordeon dd').prev().click(function(){
	  	$('.faq-wrap-accordeon').find('.accordeon-ask').css('color','#fff').next().text('+');
	  	$(this).find('.accordeon-ask').css('color','#e8bf5d').next().text('-');
	  	$('.faq-wrap-accordeon dd').not(this).css({'opacity' : 0, 'z-index': 0});
	  	$(this).next().css({'opacity': 1, 'z-index':1});
	  });

	  $('.faq-wrap-accordeon dd').css('opacity', 0);
	  $('.faq-wrap-accordeon dd').first().css({'opacity': 1, 'z-index':1});
	  $('.faq-wrap-accordeon .accordeon-ask').first().css('color','#e8bf5d').next().text('-');
	}
	else{
		$('.faq-wrap-accordeon dd').css('height',0).prev().click(function(){
	  	$('.faq-wrap-accordeon').find('.accordeon-ask').css('color','#fff').next().text('+');
	  	 $(this).find('.accordeon-ask').css('color','#e8bf5d').next().text('-');
	  	$('.faq-wrap-accordeon dd').not(this).css('height',0);
	  	$(this).next().css('height',200);
	  });

	  $('.faq-wrap-accordeon dd').first().css('height',200);
	  // $('.faq-wrap-accordeon dd').first().css({'opacity': 1, 'z-index':1});
	   $('.faq-wrap-accordeon .accordeon-ask').first().css('color','#e8bf5d').next().text('-');
	}
})();

	smoothScroll.init({
			selector: '.nav-item a', 
			speed: 600,
			offset: 110 
	});


	// smooth scroll
	$('.nav-item a').click(function(){
		$('.nav-item a').removeClass('active');
		$(this).addClass('active');
	});

	//hamburger
		let button = document.querySelector('.hamburger');
		let nav = document.querySelector('.nav');

		button.addEventListener('click',(event)=>{
			button.classList.toggle('is-active');
			if(button.classList.contains('is-active')){
				nav.style.transform = 'translateX(-160px)';
			}
			else{
				nav.style.transform = 'translateX(160px)';
			}
		});

});