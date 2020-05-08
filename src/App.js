import { About, Home, Profile } from './pages';
import { AlertState, GithubState } from './context';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Navbar } from './components';
import React from 'react';

function App() {
	return (
		<GithubState>
			<AlertState>
				<BrowserRouter>
					<Navbar />
					<div className="container pt-4">
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/about" component={About} />
							<Route path="/profile/:name" component={Profile} />
						</Switch>
					</div>
				</BrowserRouter>
			</AlertState>
		</GithubState>
	);
}

export default App;
