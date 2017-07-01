window.addEventListener('load', function(){
	let hger = document.querySelector('.hamburger');
	let nav = document.querySelector('.header-nav');
	let close = document.querySelector('.close');

	hger.addEventListener('click',(event)=>{
		hger.classList.add('is-active');
		nav.classList.add('menu-active');
	});

	close.addEventListener('click',(event)=>{
		hger.classList.remove('is-active');
		nav.classList.remove('menu-active');
	});


});