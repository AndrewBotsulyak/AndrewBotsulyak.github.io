import React from 'react';
import {} from './Nav.css';


class Nav extends React.Component{
	render(){
		return(
				<nav id="menu__nav">
					<li><a href="">О компании</a></li>
					<li><a href="">Зверохозяйство</a></li>
					<li><a href="">каталог</a></li>
					<li><a href="">пошив</a></li>
					<li><a href="">новости</a></li>
					<li><a href="">магазины</a></li>
				</nav>
			);
	}
}

export {Nav};