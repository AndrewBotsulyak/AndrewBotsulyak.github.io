import React from 'react';
import {} from './InfoBox.css';


class InfoBox extends React.Component{
	render(){
		return(
				<div className="infobox__text-title">
					<div className="infobox__wrap-line left-line">
						<div className="line"></div>
					</div>
					<span>{this.props.title}</span>
					<div className="infobox__wrap-line right-line">
						<div className="line"></div>
					</div>
				</div>
			);
	}
}


export {InfoBox};