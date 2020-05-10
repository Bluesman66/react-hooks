import { Alert, Card, Search } from '../components';
import React, { Fragment, useContext } from 'react';

import { GithubContext } from '../context';

const Home = () => {
	const { loading, users } = useContext(GithubContext);

	return (
		<Fragment>
			<Alert alert={{ text: 'Test Alert' }} />
			<Search />
			<div className="row">
				{loading ? (
					<p className="text-center">Loading...</p>
				) : (
					users.map((user) => (
						<div key={user.id} className="col-sm-4 mb-4">
							<Card user={user} />
						</div>
					))
				)}
			</div>
		</Fragment>
	);
};

export default Home;
