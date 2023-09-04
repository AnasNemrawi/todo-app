import React from 'react';
import SettingFunction from './Context/Settings/index';
import Todo from './Components/Todo';
import { MantineProvider } from '@mantine/core';
import Header from './Components/Header/index';
import Footer from './Components/Footer/index';
// import app from './app.scss';

export default function App() {
	return (
		<MantineProvider withGlobalStyles withNormalizeCSS>

			<SettingFunction>

				<Header />
				<Todo />
				<Footer />

			</SettingFunction>
		</MantineProvider>

	);
}