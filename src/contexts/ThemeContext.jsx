import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);

const ContextProvider = (props) => {
	return <ThemeContext.Provider value="red">{props.children}</ThemeContext.Provider>;
};

const ContextConsumer = () => {
	const useTheme = useContext(ThemeContext);

	return useTheme;
};

export { ContextConsumer, ContextProvider };
