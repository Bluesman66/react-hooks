import { Card, Search } from '../components';

import React from 'react';

const Home = () => {
	const cards = new Array(15).fill('').map((_, i) => i);

	return (
		<React.Fragment>
			<Search />
			<div className="row">
				{cards.map((card) => {
					return (
						<div key="card" className="col-sm-4 mb-4">
							<Card />
						</div>
					);
				})}
			</div>
		</React.Fragment>
	);
};

export default Home;
