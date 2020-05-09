import {
	CLEAR_USERS,
	GET_REPOS,
	GET_USER,
	SEARCH_USERS,
	SET_LOADING,
} from '../types';
import React, { useReducer } from 'react';

import GithubContext from './GithubContext';
import githubReducer from './githubReducer';

const GithubState = ({ children }) => {
	const initialState = {
		user: {},
		users: [],
		loading: false,
		repos: [],
	};
	const [state, dispatch] = useReducer(githubReducer, initialState);

	const search = async (value) => {
		setLoading();
		dispatch({ type: SEARCH_USERS, payload: [] });
	};

	const getUser = async (name) => {
		setLoading();
		dispatch({ type: GET_USER, payload: {} });
	};

	const getRepor = async (name) => {
		setLoading();
		dispatch({ type: GET_REPOS, payload: [] });
	};

	const clearUsers = () => dispatch({ type: CLEAR_USERS });

	const setLoading = () => dispatch({ type: SET_LOADING });

	const { user, sers, loading, repos } = state;

	return (
		<GithubContext.Provider
			value={{
				search,
				getUser,
				getRepor,
				clearUsers,
				setLoading,
				user,
				sers,
				loading,
				repos,
			}}
		>
			{children}
		</GithubContext.Provider>
	);
};

export default GithubState;
