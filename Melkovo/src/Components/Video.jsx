import React from 'react';
import {} from './Video.css';
import {InfoBox} from './InfoBox.jsx';
import {Button} from './Button.jsx';

class Video extends React.Component{

	render(){
		let prel=true;
		if(document.documentElement.clientWidth <= 1080){
			prel = false;
			console.log('video' + document.documentElement.clientWidth);
		}

		return(
				<section id="video-section">
					<video className="video-block" preload={prel} autoPlay={prel} loop poster={require('./images/cap-main_1200.jpg')}>
						<source src='src/Components/video/melkovo_video.mp4'
						type="video/mp4"></source>
						<source src='src/Components/video/melkovo_video.webm'
						type="video/webm"></source>
					</video>
					<div className="content content-video">
						<div className="video__infobox-wrap">
							<InfoBox title="собственное" />
						</div>
						<div className='infobox__text-underTitle text-video'>
							производство
						</div>
						<Button width={180} left={330} top={40} value="подробнее"/>
					</div>
				</section>
			);
	}
}

export {Video};