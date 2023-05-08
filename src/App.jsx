import { useState } from 'react';
import Header from './components/Header/Index';
import Body from './components/Body/Body';
import { ContextProvider } from './contexts/ThemeContext';

function App() {
	const [count, setCount] = useState(0);
	const [theme, setTheme] = useState('light');

	return (
		<ContextProvider value="difernete">
			<Header theme={theme} setTheme={setTheme} />
			<Body theme={theme} />
		</ContextProvider>
	);
}

export default App;
