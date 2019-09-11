import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Report from '../pages/Report'

export default function Routes() {
	return (
		<Switch>
			<Route path="/" exact component={Report} />
		</Switch>
	);
}
