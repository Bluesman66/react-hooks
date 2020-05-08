import AlertContext from './alertContext';
import React from 'react';

const AlertState = ({ children }) => {
	return <AlertContext.Provider>{children}</AlertContext.Provider>;
};

export default AlertState;
