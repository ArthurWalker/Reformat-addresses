import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Homepage from './components/Homepage';

const App = () => (
	<div>
		<Switch>
			<Route component={Homepage} exact={true} path='/'/>
		</Switch>
	</div>
);

export default App;

// nodemon --max-old-space-size=6144 ./server/testing_action_server.js
