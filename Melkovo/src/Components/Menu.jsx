import React from 'react';
import {} from './Menu.css';
import {Nav} from './Nav.jsx';


class Menu extends React.Component{
	render(){
		return(
				<div className='menu-fixed'>
					
					<a href='#' className="hamburger hamburger--spring">
						  <span className="hamburger-box">
						    <span className="hamburger-inner"></span>
						  </span>
					</a>

					<div className="menu__logo-name2">
								Мелково
						<div className="menu__logo-name-line"></div>
						<span>меха</span>
						<div className="menu__logo-name-line"></div>

					</div>

					<div className="menu__wrap">



						<div className="menu__wrap-logo">
							<svg className="menu__logo" x="0px" y='0px'
							viewBox="0 0 368.5 368.5">
							<g>
								<g>
									<path fill="#414042" d="M121.3,91.1c0,0,0.1-0.7,0.4-2c0.3-1.3,0.7-3.1,1.3-5.5c0.6-2.4,1.5-5.2,2.8-8.4c1.4-3.2,3.1-6.9,6.9-10.3
										c1.9-1.6,4.4-3,7.3-3.5l1.1-0.2l0.6-0.1l0.1,0l0.4,0l0.2,0c0.6,0,1.1,0,1.7,0c0.8,0.1,1.6,0.2,2.4,0.3c0.7,0.2,1.4,0.3,2.1,0.5
										c2.8,0.8,5.3,2.3,7.6,3.9c2.3,1.6,4.4,3.4,6.4,5.3c2,1.9,3.8,3.9,5.6,5.9c1.8,1.9,3.6,4.1,5.1,5.5c3.2,2.9,6.8,4.5,10.9,4.5
										c4.1,0,7.7-1.6,10.9-4.5c0.8-0.8,1.5-1.5,2.4-2.5c0.9-1,1.8-2,2.7-2.9c1.8-2,3.6-4,5.6-5.9c3.9-3.8,8.4-7.4,14-9.2
										c2.8-0.9,5.8-1.1,8.5-0.6c0.4,0,1.4,0.3,2.1,0.5c0.4,0.1,0.8,0.2,1.1,0.4l0.9,0.5c0.6,0.3,1.2,0.6,1.8,1c0.5,0.4,1.1,0.7,1.5,1.2
										c3.7,3.4,5.5,7.1,6.9,10.3c1.3,3.2,2.2,6.1,2.8,8.4c0.6,2.4,1,4.2,1.3,5.5c0.3,1.3,0.4,2,0.4,2s-1.4-2.4-3.8-6.6
										c-1.2-2.1-2.7-4.6-4.5-7.2c-1.8-2.6-4.1-5.5-7-7.1c-0.3-0.3-0.7-0.3-1.1-0.5c-0.3-0.2-0.7-0.3-1.1-0.4l-0.5-0.2
										c-0.2-0.1-0.3,0-0.4,0c-0.3,0-0.4-0.1-1.1-0.1c-1.7,0-3.3,0.3-5,1.1c-3.3,1.5-6.5,4.5-9.7,8.1c-1.6,1.8-3.2,3.8-4.8,5.8
										c-1.7,2.1-3.1,4.1-5.5,6.5c-2.3,2.3-5,4.4-8.3,5.7c-1.6,0.7-3.3,1.2-5,1.6c-0.9,0.2-1.7,0.3-2.6,0.4l-1.4,0.1l-1.2,0
										c-3.4,0-7-0.7-10.2-2.1c-3.2-1.4-6-3.5-8.3-5.7c-2.4-2.4-3.8-4.5-5.5-6.5c-1.6-2-3.2-4-4.8-5.8c-3.2-3.6-6.4-6.6-9.7-8.1
										c-0.4-0.2-0.8-0.3-1.2-0.5c-0.3-0.1-0.7-0.2-1-0.3c-0.5-0.1-1.1-0.2-1.6-0.2l-0.2,0l-0.1,0c-0.2,0,0.3,0,0.2,0l-0.1,0l-0.3,0
										l-0.6,0c-1.5,0-2.9,0.5-4.3,1.3c-2.8,1.7-5.1,4.6-7,7.2c-1.9,2.6-3.3,5.2-4.5,7.2C122.7,88.7,121.3,91.1,121.3,91.1z"/>
									<ellipse fill="#414042" cx="153.9" cy="124" rx="6.7" ry="6.7"/>
									<ellipse fill="#414042" cx="214.5" cy="124" rx="6.7" ry="6.7"/>
									<ellipse fill="#414042" cx="184.2" cy="154.9" rx="6.7" ry="6.7"/>
								</g>
							</g>
							</svg>
							<div className="menu__logo-name">
								Мелково
								<div className="menu__logo-name-line"></div>
								<span>меха</span>
								<div className="menu__logo-name-line"></div>

							</div>
						</div>
						{/* component */}
						<Nav />

						<div className='menu__contact'>

							<div className='contact-block insta'>
								<img src={require('./images/instagram-logo.png')}/>
								<a href='#' className='contact__text'>
									подписаться на instagram
								</a>
							</div>
							
							<div className='contact-block firm'>
								<img src={require('./images/radish.png')}/>
								<a href='#' className='contact__text'>
									<span>Andrew</span> - создание сайта 
								</a>
							</div>

						</div>

					</div>
				</div>
			);
	}


	componentDidMount() {
		let button = document.querySelector('.hamburger');
		let menuWrap = document.querySelector('.menu__wrap');
		let menuNav = document.querySelector('#menu__nav');
		let menuNavRefs = document.querySelectorAll('#menu__nav li a');
		button.addEventListener('click',(event)=>{
			button.classList.toggle('is-active');
			if(button.classList.contains('is-active')){
				menuWrap.style.height = 100 + 'vh';
				[].forEach.call(menuNavRefs, (el)=>{
					el.style.opacity = 1;
				});
			}
			else{
				menuWrap.style.height = 0;
				[].forEach.call(menuNavRefs, (el)=>{
					el.style.opacity = 0;
				});	
				
			}
		});

	}

}

export {Menu};