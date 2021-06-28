import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'; 
import Home from './components/Home';
import Navbar from './components/partial/Navbar';
import Footer from './components/partial/Footer';
import About from './components/About';
import Product from './components/Product';
import Single from './components/Single';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Login from './components/backend/Login';
import admin from './components/backend/admin';
import Reginster from './components/backend/Reginster';
import Passwordreset from './components/backend/Passwordreset';
function App() {
  return (
    <div>
      
      <Router>
        <Navbar/>
          <Switch>
            <Route exact path='/'component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/product' component={Product}/>
            <Route path='/single' component={Single}/>
            <Route path='/listproduct' component={Gallery}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/admin' component={admin}/>
              <Route path='/login' component={Login}/>
              <Route path='/reginster' component={Reginster}/>
              <Route path='/passwordreset' component={Passwordreset}/>
          </Switch>
        
      </Router>

   
      
    </div>
  );
}

export default App;
