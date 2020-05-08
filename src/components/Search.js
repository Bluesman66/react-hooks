import React, { useContext } from 'react';

import { AlertContext } from '../context';

const Search = () => {
	const { show } = useContext(AlertContext);

	const onSubmit = (event) => {
		if (event.key === 'Enter') {
			show('This is alert!', 'success');
		}
	};

	return (
		<div className="form-group">
			<input type="text" className="form-control" placeholder="Please input user's nikname" onKeyPress={onSubmit} />
		</div>
	);
};

export default Search;
