import Home from './components/Home'
import Navbar from './components/Navbar'
import Repo from './components/Repo'
import User from './components/User'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/' exact component={Home} />
            <Route path='/users' component={User} />
            <Route path='/repos' component={Repo} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
