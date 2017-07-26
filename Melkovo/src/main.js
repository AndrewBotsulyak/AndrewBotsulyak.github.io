import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {} from './jquery.parallax.min.js';
import {} from './jquery.appear.js';
import {} from './animate.css';
import {} from './main.css';
import {} from './hamburgers.min.css';

import {Preloader} from './Components/Preloader.jsx';
import {Header} from './Components/Header.jsx';
import {Menu} from './Components/Menu.jsx';
import {Catalog} from './Components/Catalog.jsx';
import {Order} from './Components/Order.jsx';
import {Video} from './Components/Video.jsx';
import {Shops} from './Components/Shops.jsx';


class Main extends React.Component{
	render(){
		return(
				<div ref={(main)=>this.main = main}>
					<Preloader/>
					<Menu/>
					<Header ref={(header)=>this.header = header} />
					<Catalog/>
					<Order/>
					<Video/>
					<Shops />
				</div>
			);
	}

	componentDidMount() {
		
		window.onload = function(event){
			window.preloader.style.transition = '.5s ease';
			window.preloader.style.opacity = 0;

			setTimeout(function(){
				window.preloader.style.display = 'none';}
				,500);
		}

	{/* paralax library */}
	
		$('.header__content-infobox').parallax({
		  calibrateX: false,
		  calibrateY: true,
		  invertX: true,
		  invertY: true,
		  limitX: false,
		  limitY: false,
		  scalarX: 4,
		  scalarY: 4,
		  frictionX: 0.2,
		  frictionY: 0.8,
		  originX: 1.0,
		  originY: 1.0
		});

		// paralax effect
		let paralaxElements = document.querySelectorAll('.paralax');
		window.addEventListener('scroll',(event)=>{
			paralaxElements.forEach((el)=>{
				el.style.transform =`translateY(${-window.pageYOffset/60}%)`;
				
			});
		});



		(function(){
			$('.fadeUp').appear();
			$('.fadeUpRotate').appear();
			$('.anim').appear();

			let coordCatal = window.catalog.getBoundingClientRect();

			if(Math.round(coordCatal.top) == Math.round(document.documentElement.clientHeight))
			{
				$('.fadeUp').css({'animation':'fadeUp 1.5s ease','opacity':1});
				$('.fadeUpRotate').css({'animation':'fadeUpRotate 1.5s ease','opacity':1});
			}

			if(Math.round(window.catalog.getBoundingClientRect().top) < Math.round(document.documentElement.clientHeight/2))
				{	
					$('.fadeUp').css({'animation':'none','opacity':0});
					$('.fadeUpRotate').css({'animation':'none','opacity':0});
				}
			
			window.addEventListener('scroll', function(event){
				if(Math.round(window.catalog.getBoundingClientRect().top) > Math.round(document.documentElement.clientHeight/2))
				if($('.fadeUp').css('opacity') == 0){
					$('.fadeUp').css({'animation':'fadeUp 1.5s ease','opacity':1});
					$('.fadeUpRotate').css({'animation':'fadeUpRotate 1.5s ease','opacity':1});
				}	
			});
			
			$('.anim').on('appear',function(event,all){

			
					setTimeout(function(){
					$(all).css('opacity',1);
					
					$(all).filter('[data-nameAnim]').each(function(index,el){

						$(el).css('animation',el.dataset.nameanim + ' .4s linear');
					});
					$(all).not('[data-nameAnim]').addClass('animated fadeInUp');
				
					},500);
			});
		})();
	}

}

ReactDOM.render(<Main/>,document.getElementById('root'));