import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import ProjectDetail from './components/projects/ProjectDetail';
import SignIn from './components/auth/SignIn.jsx';
import SignUp from './components/auth/SignUp.jsx';
import CreateProject from './components/projects/CreateProject';






function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar/>
      <Switch>
      <Route path="/" component={Dashboard} exact/>
      <Route path="/project/:id" component={ProjectDetail} exact/>
      <Route path="/signin" component={SignIn} exact/>
      <Route path="/signup" component={SignUp} exact/>
      <Route path="/create" component={CreateProject} exact/>




      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
