import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import ProjectDetail from './components/projects/ProjectDetail';
import SignIn from './components/auth/SignIn.jsx';





function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar/>
      <Switch>
      <Route path="/" component={Dashboard} exact/>
      <Route path="/project/:id" component={ProjectDetail} exact/>
      <Route path="/signin" component={SignIn} exact/>


      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
