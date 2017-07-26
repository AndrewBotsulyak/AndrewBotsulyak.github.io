import React from 'react';
import {} from './Catalog.css';
import {Button} from './Button.jsx';

class Catalog extends React.Component{
	render(){
		return(
				<section id="catalog"
				ref={(catalog)=> this.catalog = catalog}>
					<div className="content content-catalog" >
						<div className="catalog__box anim" data-nameAnim='boxAnim'>
							<div className="catalog__label anim" data-nameAnim='slideLeft'>
								<span>коллекция</span>
							</div>
							<div className="catalog__subtitle">
								Новинки
							</div>
							<div className="catalog__year">
								2017
							</div>

							{/* component */}
							<Button width={160} top={300} left={50} value="перейти"/>

						</div>

					</div>
				</section>
			);
	}

	componentDidMount() {

	}

}

export {Catalog};