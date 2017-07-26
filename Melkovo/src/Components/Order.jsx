import React from 'react';
import {} from './Order.css';
import {Button} from './Button.jsx';


class Order extends React.Component{
	render(){
		return(
				<section id="order">
				<div className="content order-content">
						<div className="order__buy">
							<div className="order__buy-label anim" data-nameAnim='slideRight'>
							акция
							</div>
							<div className="order__buy-content">
								<div className="buy-content__slog">
									Купи весной - <br></br> носи зимой
								</div>
								<p className="buy-content__text">
									Приобретайте шубу в рассрочку в наших салонах-магазинах.
								</p>

								<Button width={180} top={25} left={0} value={"подробнее"}/>

							</div>
						</div>
						
						<img className="ferret paralax"
						src={require('./images/ferret.png')}
						/>

						<img className="order-img paralax"
						src={require('./images/order_img.jpg')}
						/>

						<div className="order__buy2 anim" data-nameAnim='boxAnim'>
							<div className="order__buy2-label">
								Эксклюзив
							</div>
							<div className="order__buy2-text">
								Шубы на заказ
							</div>
						

							<div className="order__short-descr">
								<p className="anim">
									Наши мастера всегда готовы сшить шубу по
									 вашему индивидуальному заказу. Это может быть
									  что-то уникальное или любая модель из нашей
									   коллекции сшитая под вас.
								</p>
								<div className="button-anim anim" >
									<Button width={180} top={35} left={0} value={"Подробнее"}/>
								</div>
							</div>
						</div>
				</div>
				</section>
			);
	}

	componentDidMount() {
		

	}


}


export {Order};