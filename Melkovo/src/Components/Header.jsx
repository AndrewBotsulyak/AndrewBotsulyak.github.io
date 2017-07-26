import React from 'react';
import {} from './Header.css';
import {InfoBox} from './InfoBox.jsx';


class Header extends React.Component{
	render(){
		return(
				<div className="header-fix" ref={(headerMy)=>this.headerElement = headerMy}>
					
					<div className="content">
						
						<div className="header__content-infobox">
							
							<div className="infobox__text">
								
								{/* component */}
								<InfoBox title="ощущение"/>
								
								<div className="infobox__text-underTitle">
									роcкоши
								</div>
								<div className="leaf-down">
									листай вниз
									<div className="arrow-down">
									</div>
								</div>
							</div>

							<div className='layer' data-depth="0.80">
								<img src={require('./images/babe.png')} className="babe-chair move" data-speed="1">
								</img>
							</div>

							<div className='layer' data-depth="3">
								<div className="red-flower move fadeUpRotate" data-speed="4">
								</div>
							</div>
							<div className='layer' data-depth="4">
								<div className="big-flower move fadeUp" data-speed="8">
								</div>
							</div>

							<div className='layer' data-depth="2">
								<div className="one-flower move fadeUpRotate" data-speed="2">
								</div>
							</div>

							<div className='layer' data-depth="2">
								<div className="little-flower move fadeUp" data-speed="8">
								</div>
							</div>
						</div>
					</div>
				</div>
			);
	}

	componentDidMount() {

		
	}
}

export {Header};