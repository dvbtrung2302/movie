import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import HomePage from './features/HomePage'
import Topbar from './components/Topbar';

function App() {
  return (
		<div className="App">
			<Router>
				<Topbar />
				<Switch>
					<Route exact path="/" component={HomePage} />
				</Switch>
			</Router>
		</div>
  );
}

export default App;
