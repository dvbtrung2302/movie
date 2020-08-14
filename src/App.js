import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Topbar from './components/Topbar';

const HomePage = React.lazy(() => import('./features/HomePage'));

function App() {
  return (
		<div className="app">
			<Suspense fallback={<div>Loading....</div>}>
				<Router>
					<Topbar />
					<Switch>
						<Route exact path="/" component={HomePage} />
					</Switch>
				</Router>
			</Suspense>
		</div>
  );
}

export default App;
