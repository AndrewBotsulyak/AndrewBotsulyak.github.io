import React from 'react';
import {} from './Shops.css';
import {Button} from './Button.jsx';


class Shops extends React.Component{
	render(){
		return(
				<section id="shops">
					<img className="shops__bg" src={require('./images/main_last1920.jpg')} />
					
					<div className="content shops__content">

						<div className="shops__block anim" data-nameAnim='boxAnim'>
							<div className="shops__wrap-text">
								<span>Наши</span>
								<span className="shops__block-title">магазины</span>
							</div>
							<p className="shops__block-text">
								Любую шубу из наших коллекций можно 
								приобрести в магазинах Москвы, Твери,
								 Самары, Солнечногорска или Мелково.
							</p>

							<Button width={270} top={250} left={0} value={'посмотреть на карте'} />

						</div>

						<img className=" shops__bigFlower" src={require('./images/big_flower.png')}/>
						<img className=" shops__littleFlower" src={require('./images/little_flower.png')}/>
						
					</div>


				</section>
			);
	}
}


export {Shops};