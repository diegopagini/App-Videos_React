/** @format */

import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/img/logo-platzi-video-BW2.png';
import userIcon from '../assets/img/user-icon.png';

const Header = () => (
	<header className='header'>
		<img className='header__img' src={logo} alt='app videos' />
		<div className='header__menu'>
			<div className='header__menu--profile'>
				<img src={userIcon} alt='icon' />
				<p>Perfil</p>
			</div>
			<ul>
				<li>
					<a href='#'>Cuenta</a>
				</li>
				<li>
					<a href='#'>Cerrar Sesión</a>
				</li>
			</ul>
		</div>
	</header>
);

export default Header;
