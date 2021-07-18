import React from 'react'
import './App.css';
import {Redirect, Switch,BrowserRouter, Route} from 'react-router-dom'
import HeaderBar from './Component/Header/HeaderBar'
import Home from './Component/Otherpages/Home'
import Login from './Component/Otherpages/Login'
import Signup from './Component/Otherpages/SignUp'
import Logout from './Component/Otherpages/Logout'
import SpaceXPage from './Component/Otherpages/SpaceXPage'
import ProtectedRoutes from './ProtectedRoutes';

function App() {




  return (
    <div className="App" id="container">
           <BrowserRouter>
    <HeaderBar/>   
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/logout" component={Logout}/>
      <Route path="/signup" component={Signup}/>
      <ProtectedRoutes exact path="/SpaceXPage" component={(props)=><SpaceXPage {...props}/>}/>
     

   
      <Redirect to="/" />

   
 </Switch>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
