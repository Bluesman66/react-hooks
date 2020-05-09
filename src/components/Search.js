import React, { useContext, useState } from 'react';

import { AlertContext } from '../context';
import { GithubContext } from '../context';

const Search = () => {
	const [value, setValue] = useState('');
	const { show } = useContext(AlertContext);
	const { search } = useContext(GithubContext);

	const onSubmit = (event) => {
		if (event.key !== 'Enter') {
			return;
		}

		if (value.trim()) {
			search(value.trim());
		} else {
			show("Please enter user's data");
		}
	};

	return (
		<div className="form-group">
			<input
				type="text"
				className="form-control"
				placeholder="Please input user's nikname"
				value={value}
				onChange={(event) => setValue(event.target.value)}
				onKeyPress={onSubmit}
			/>
		</div>
	);
};

export default Search;
