import React from 'react';
import {} from './Button.css';


class Button extends React.Component{
	render(){

		let myStyle = {
			top: this.props.top,
			left: this.props.left,
			width: this.props.width
		};
		
		return(
				<div className="button-wrap">
					<div>
						<div className="button-content" style={myStyle}>
								<div className="button-dots">
									<div className="button-dot"></div>
									<div className="button-dot"></div>
									<div className="button-dot"></div>
								</div>
								<div className="button-value">
									{this.props.value}
								</div>
						</div>
							<div className="button" style={myStyle}></div>
					</div>
				</div>
			);
	}
}


export {Button};