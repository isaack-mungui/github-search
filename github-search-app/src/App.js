import Home from './components/Home'
import Navbar from './components/Navbar'
import Repo from './components/Repo'
import User from './components/User'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Switch>
            <Route path='/'>
              <Home />
            </Route>
            <Route path='/users'>
              <User />
            </Route>
            <Route path='/repos'>
              <Repo />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
