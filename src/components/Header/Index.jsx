import { useState } from 'react';
import { ContextConsumer } from '../../contexts/ThemeContext';
import './Header.css';

const Header = ({ theme, setTheme }) => {
	const themeee = ContextConsumer();
	const handleButton = () => {
		setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
	};

	console.log(themeee, 'context');

	return (
		<div className={`Header header-mode-${theme}`}>
			<h1>ReactHooks</h1>
			<button onClick={handleButton}>Theme Mode</button>
		</div>
	);
};

export default Header;
