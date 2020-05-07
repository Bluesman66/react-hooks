import { Home } from './pages';
import { Navbar } from './components';
import React from 'react';

function App() {
	return (
		<React.Fragment>
			<Navbar />
			<div className="container pt-4">
				<Home />
			</div>
		</React.Fragment>
	);
}

export default App;
