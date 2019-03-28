import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Register from './components/RegisterCandidate/RegisterCandidate';
import Search from './components/SearchGithubUser/SearchGithubUser'
import Home from './components/Home/Home'


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
          <li><Link to={'/home'} className="nav-link">CUSTOM GITHUB</Link></li>
            <li><Link to={'/register'} className="nav-link">Register</Link></li>
            <li><Link to={'/search'} className="nav-link">Search</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
            <Route path='/home' component={Home} />  
              <Route path='/register' component={Register} />
              <Route path='/search' component={Search} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
