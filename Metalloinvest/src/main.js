import './SCSS/main.scss';
import './SCSS/header.scss';
import './SCSS/menu.scss';
import './css/swiper.min.css';
import './SCSS/slider.scss';
import './SCSS/footer.scss';
import './SCSS/video-block.scss';

import $ from 'jquery';
import './plugins/swiper.jquery.min.js';
import './menu-Plugin/js/menu.js';
import './menu-Plugin/js/classie.js';



import './font-awesome/css/font-awesome.min.css';
import './menu-Plugin/css/component.css';
import './menu-Plugin/css/normalize.css';
import './menu-Plugin/css/demo.css';



//scroll
import './plugins/scroll/jquery.jscrollpane.css';
import './plugins/scroll/jquery.jscrollpane.min.js';
import './SCSS/info-block.scss';
import './plugins/scroll/jquery.mousewheel.js';

// jwplayer
import './plugins/jwplayer.js';




$(window).ready(function(){
	let customControls = document.querySelector(`.swiper-wrapper > .custom-controls`);
	let arrVidBlPlay = [];
	let arrJwpl = [];
	
											// Slider	
	
	let swiper = new Swiper('.swiper-container', {
	        pagination: '.swiper-pagination',
	        paginationClickable: true,
	        direction: 'vertical',
	        loop: true,
	        mousewheelControl: true,
	        speed: 1000,
	        grabCursor: false,
	        simulateTouch:false,
	        effect:'slide',

	        onInit: function(){

	        	// initialize jwplayer for each slide
	        	(function(){
		        	let videoWraps = GenerateIdjwplayer();

		        	[].forEach.call(videoWraps,(el)=>{
		        		let idVideo = el.id;
		        		let filePath = el.nextElementSibling.dataset.fileMp4;
		        		let vidBlockPlay = el.parentNode.parentNode;
		        		arrVidBlPlay.push(vidBlockPlay);                      // init arrVidBlPlay 
		        		arrJwpl.push(InitJwPlayer(idVideo,filePath));// id of wrapper / file path / 
	        			//InitJwPlayer(idVideo,filePath);
	        		});
	        	})();

	        	// animete first slide circle 
	        	let el = document.querySelector('[data-swiper-slide-index="0"] .path[data-nameanim]');
		 			let anim = el.dataset.nameanim + ' 1.5s ease 2s forwards';   // with 2s delay
			        el.style.animation = anim;
		 		
		 		// :hover (.video-block-play) // and some other options
		 		//EffectsVidBlock();
	        	
	        },

	        onSlideChangeEnd:function(swiper){
	        	$(`[data-swiper-slide-index="${swiper.realIndex}"] .path[data-nameanim]`).each((index,el)=>{
		 			let anim = el.dataset.nameanim + ' 1.5s ease forwards';   
			        el.style.animation = anim;
		 		});

	        }

		});



										// Menu transform

	(function(){
		showMenu.addEventListener('click',(event)=>{
			console.log('click');
			if(menu.classList.contains('menu-active')){
				setTimeout(()=>{perspective.classList.remove('animate')},100);
			}
			else{

			}
			menu.classList.toggle('menu-active');

		});

		perspective.addEventListener('click',(event)=>{
			
			if(menu.classList.contains('menu-active')){
				setTimeout(()=>{menu.classList.remove('menu-active')},0);
				//window['fp-nav'].style.display = 'block';
				//$.fn.fullpage.setAllowScrolling(true);
			}
		});		
	})();
	

											// footer 

(function(){

	let wrap = document.querySelector('.footer-social-wrap');
	let footSocial = document.querySelector('.footer-social');
	let more = document.querySelector('.footer-social-open-hidden');
	more.flag = false;

	more.addEventListener('mouseover',(event)=>{
		if(!more.flag){
			more.flag = true;
			more.classList.add('slide-footer-social');
		}
	});

	wrap.addEventListener('mouseout',(event)=>{
		if(event.target === wrap && more.flag == true){
			more.classList.remove('slide-footer-social');
			more.flag = false;
		}

	});

})();


											// info-block

(function(){


	let wrapAll = document.querySelectorAll('.info-block-wrap');
	//let info = document.querySelectorAll('.info-block');
	let closeAll = document.querySelectorAll('.info-block__close');
	let currentWrap = null, attrStr = null, page = null;

	// click on slider
	[].forEach.call(wrapAll,(wrap)=>{
		wrap.addEventListener('click',(event)=>{
			console.log(event.target);
			if(event.target.tagName == "I"){
				currentWrap = event.target.parentNode;
			}
			else{
				currentWrap = event.target;
			}
			attrStr = currentWrap.parentNode.dataset.name;
			page = document.querySelector(`.info-block[data-slider-name='${attrStr}']`); // finding current page with info
			
			if(!currentWrap.classList.contains('active')){
				currentWrap.classList.toggle('active');
				//page.style.display = 'block';
				setTimeout(()=>page.style.transform = 'translateX(-100%)');
			}
		});
	});

	//click 'close' in info-block
	[].forEach.call(closeAll,(close)=>{
		close.addEventListener('click',(event)=>{
			currentWrap.classList.remove('active');
			page.style.transform = 'translateX(100%)';
			setTimeout(()=>{
				//page.style.display = 'none';
				//currentWrap.style.pointerEvents = 'none';
				//setTimeout(()=>currentWrap.style.pointerEvents = 'auto',100)
			},500); // 500 = transition for .info-block !
		});
	});


})();


						//scroll in info-block (.info-box__content)
 $('.info-box__content').jScrollPane({
        mouseWheelSpeed: 100,
        autoReinitialise: true,
        autoReinitialiseDelay: 5000,
        animateScroll: true,
        verticalGutter:10
    });

 			////////////////      Custom Controls AND jwplayer /////// 

	

	function InitJwPlayer(idVideo,file_path){

			
	jwplayer.key="4NsFaxEx4Q/WPa85yuJCTTvetek7iJHZgeITug==";
	
	let jwpl = jwplayer(idVideo).setup({
        'file': file_path,
        width:'100%',
        height:'100%',
        autostart: false,
        'controls': false,
        mute: true,
    });

	console.log(idVideo);

	let sizeCircle = 505;
	if(document.documentElement.clientWidth < 760)
		sizeCircle = 300;
	let radius = sizeCircle/2;
	let customControls = document.querySelector(`.wrapper > .custom-controls`);
	
	let clone = customControls.cloneNode(true);

	

	let playhead = clone.querySelector(`.playhead`);
	let playheadHead = clone.querySelector(`.playhead-head`);
	let stat = clone.querySelector(` .static-block`);
	let path = clone.querySelector(` .path-control`);
	let pathBuffer = clone.querySelector(` .path-buffer`);
	let playButton = clone.querySelector(`.play-button`);

	
playhead.addEventListener('click',function(event){      
       CircleAnalysis(event); 
});

playheadHead.addEventListener('mousedown',function(event){
    CircleAnalysis(event); 
});

    jwpl.on('ready',function(){

        // Buffer
        let interval = setInterval(function(){
            let dash = (314/100)*jwpl.getBuffer();
            pathBuffer.style.transition = '1s linear';
            pathBuffer.style.strokeDashoffset = 314 - dash;
            if(jwpl.getBuffer() == 100){
                clearInterval(interval);
                return;
            }
       },1000);

     	
        // add controls to jwlayer
        let currentIdVideo = document.querySelector(`#${idVideo}`);
        currentIdVideo.appendChild(clone);

        

    });

    

	function CircleAnalysis(event){

        //console.log('x = ' + event.clientX);
        //console.log('y = ' + event.clientY);

        const dashIntoDeg = 0.872;
        const radInDeg = 57.325;
        let coord = stat.getBoundingClientRect();
        console.log(stat);
        let centerX = coord.left + radius; //coords center of the circle
        let centerY = coord.top + radius;
        let catetA = Math.pow(event.clientX - centerX,2); 
        let catetB = Math.pow(event.clientY - centerY,2);
        let gipotenuza = Math.sqrt(catetA+catetB);
        let rest = radius - gipotenuza;
        /*console.log('center: ' + centerX);
        console.log(centerY);
        console.log('gipotenuza = ' + gipotenuza);*/
        if(gipotenuza > radius-10){
            let catetC = Math.abs(event.clientX + (rest/2) - centerX ); 
            let catetD = Math.abs(event.clientY + (rest/2) - centerY );

            //let tan = Math.tan(220/120);
            let tan = catetC/catetD;
            let rad = Math.atan(tan);
            let deg = 0;
            if(event.clientX > centerX && event.clientY < centerY) {
                deg = (rad * radInDeg);
            }
            if(event.clientX > centerX && event.clientY > centerY) {
                deg = 90-(rad * radInDeg) + 90;
            }
             if(event.clientX < centerX && event.clientY > centerY){
                deg = (rad * radInDeg) + 180;
            }
            if(event.clientX < centerX && event.clientY < centerY){
                deg = 90-(rad * radInDeg) + 270;
            }



            playhead.style.transition = '';
            playhead.style.transform = `rotate(${deg}deg)`;
            path.style.transition = '';
            path.style.strokeDashoffset = 314 - (deg * dashIntoDeg);

            //console.log('playhead: ' + playhead.style.transition);
            //console.log('path: ' + path.style.transition);


            jwpl.seek((jwpl.getDuration()/360)*deg); // rewind to current time;
            //console.log('position after seek: ' + deg);
            PlayerPlay(deg);
            PlayerButton();
        }
	}


	let globalDeg = null;
	jwpl.on('play',function(){
		console.log('event play!!!!!!!!');
	        PlayerPlay(globalDeg);
	        PlayerButton(); // change icon (play/pause)
	    });

	function PlayerPlay(deg2){

	    	if(jwpl.timerjw){
	            clearInterval(jwpl.timerjw);
	        }

	        let ps = (jwpl.getDuration()/360)*deg2;

	        jwpl.timerjw = setInterval(function(){
	        	let pos = jwpl.getPosition();

	        	if(pos < ps+4 && pos >= ps){
		        	
		            ps = pos;
		            let deg = (360/jwpl.getDuration()) * pos;
		            globalDeg = deg;
		            playhead.style.transition = '1s linear';
		            playhead.style.transform = `rotate(${deg}deg)`;
		            path.style.transition = '1s linear';
		            path.style.strokeDashoffset = 314 - (deg * 0.872);
	        	}
	        },1000);
	    
	}

	function PlayerButton(){    
	    let cl = playButton.classList;
	    if(!cl.contains('pause')){
	        cl.add('pause');    
	    }
	}

	playButton.addEventListener('click',function(){
	    let cl = playButton.classList;
	    //console.log('play');
	    cl.toggle('pause');
	    if(cl.contains('pause')){
	        jwpl.play();
	        console.log('play in btnPlay');
	    }
	    else{
	        jwpl.pause();
	        clearInterval(jwpl.timerjw);  
	    }
	});


	return jwpl;
};

		// generate "id for jwplayer" 
		// return all wrappers for jwplayer
function GenerateIdjwplayer(){

	let allSlides = document.querySelectorAll('[data-player]');
	console.log('slides count = ' + allSlides.length);
	[].forEach.call(allSlides,(el,index)=>{
		if(index == 0){
			el.id = "myVideo-" + (allSlides.length-2);
		}
		if(index == allSlides.length-1){
			el.id = "myVideo-" + (allSlides.length-1);
		}
	});

	return allSlides;
};

	// :hover (.video-block-play)
//function EffectsVidBlock(){

let pagination = document.querySelector('.swiper-pagination');

  (function(){
	
	let header = document.querySelector('.header');
	let footer = document.querySelector('.footer');

	arrVidBlPlay.forEach((el,index)=>{

		let timeOut ,timeOutHide = null;
		let vidPlayer = el.querySelector('.videoplayer');
		let controls, vidCloseWrap = el.querySelector('.video-close-wrap');
		
		setTimeout(()=>{
			controls = el.querySelector('.custom-controls');
			console.log(controls);
		},3000); // (~time) wait until .custom-controls add in el

		

		el.addEventListener('mouseenter',(event)=>{
			console.log(event.target);
			if(!el.classList.contains('close') && !el.classList.contains('big-circle') 
				&& !el.classList.contains('small-circle')){

				el.classList.add('small-circle');
				el.style.transition = '10s linear';
				vidPlayer.style.opacity = 1;
			}
			timeOut = setTimeout(function(){
				if(!el.classList.contains('close') && !el.classList.contains('big-circle')){

					el.classList.remove('small-circle');
					el.classList.add('big-circle');
					el.style.transition = '1s linear';
					vidPlayer.style.opacity = 1;
					arrJwpl[index].play();
					console.log('play in setTimeout');

					// swiper settings
					pagination.style.zIndex = 0;
					swiper.disableMousewheelControl();
					swiper.disableTouchControl();

					

				}
			},3000);

		});
		el.addEventListener('mouseleave',(event)=>{
									// 'close' just flag
			if(!el.classList.contains('big-circle')){

				el.classList.remove('small-circle');
				vidPlayer.style.opacity = 0;
				clearTimeout(timeOut);
				clearTimeout(timeOutHide);
			}
			
		});

		el.addEventListener('mousemove',(event)=>{
			
			clearTimeout(timeOutHide);         // visible 
			header.style.opacity = 1;
			footer.style.opacity = 1;
			controls.style.opacity = 1;
			vidCloseWrap.style.display = 'block';
			

			timeOutHide = setTimeout(()=>{    //   hide header and footer
				header.style.opacity = 0;
				footer.style.opacity = 0;
				controls.style.opacity = 0;
				vidCloseWrap.style.display = 'none';
				
			},3000);
		});

		
			console.log(el);
			let closeBtn = el.querySelector('.video-close-btn');

		closeBtn.addEventListener('click',(event)=>{    // click btn 'close' on video
				console.log('close btn');

				clearTimeout(timeOutHide);

				el.classList.remove('big-circle');
				el.classList.add('close'); // 'close' just flag
				vidPlayer.style.opacity = 1;
				setTimeout(()=>el.classList.remove('close'),3000); // remove class 'close'
				arrJwpl[index].play(false);
				//console.log('pause in btnclose');
				


				//swiper settings
				setTimeout(()=>pagination.style.zIndex = 1,1000);
				swiper.enableMousewheelControl();
				swiper.enableTouchControl();

				let wraploseBtn = closeBtn.parentNode;
				let pic = wraploseBtn.querySelector('.video-close-pic');
				//wraploseBtn.classList.add('big-circle');
				wraploseBtn.style.width = 5000 + 'px';
				wraploseBtn.style.height = 5000 + 'px';
				wraploseBtn.style.transform = 'translateY(-50%)';
				pic.style.transform = 'translate(135px,-50%)';
				pic.style.top = 50 + '%';
				//wraploseBtn.style.zIndex = 1;
				setTimeout(()=>{
					//wraploseBtn.style.zIndex = 0;
					//el.style.zIndex = -1;
					//closeBtn.dispatchEvent('onClick');
					el.style.transition = '';
					el.style.zIndex = -1;
					el.style.display = 'none';
					//wraploseBtn.classList.remove('big-circle');
					wraploseBtn.style.width = 200 + 'px';
					wraploseBtn.style.height = 200 + 'px';
					
					el.style.zIndex = 10;
					setTimeout(()=>{
						
						el.style.display = 'block';
					},1000);
				},700);
				

			});
			
	});


})();


let menuItems = document.querySelectorAll('.menu-item > [data-index]');

[].forEach.call(menuItems,function(el){

let index = el.dataset.index;
let vidBlock = swiper.slides[index].querySelector('.video-block-play');
let vidPlayer = vidBlock.querySelector('.videoplayer');

	el.addEventListener('click',(event)=>{
	{
		//menu options
		perspective.classList.remove('animate'); 
		menu.classList.toggle('menu-active');
	}
		pagination.style.zIndex = 0;

		vidBlock.classList.add('big-circle');
		vidBlock.style.transition = '0s';
		swiper.slideTo(index,0);
		setTimeout(function(){vidBlock.style.transition = '1s linear';});
		vidPlayer.style.opacity = 1;
	});


	
});

}); //$(window).ready -- END