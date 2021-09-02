import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import {useEffect, useState} from "react";
import axiosApi from './AxiosApi';
import Content from "./Components/Сontent/Content";
import Admin from "./Components/Admin/Admin";
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="navigation">

          <div className="title">
            <h2 className="header">Static Pages</h2>
          </div>

          <div className="navLinks">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
            <NavLink to="/divisions">Divisions</NavLink>
            <NavLink to="/admin">Admin</NavLink>
          </div>

        </div>
        <div className="container">
          <div className="container-inner">
            <Switch>
              <Route exact path="/" component={Content}/>
              <Route exact path="/home" component={Content}/>
              <Route path="/about" component={Content}/>
              <Route path="/contacts" component={Content}/>
              <Route path="/divisions" component={Content}/>
              <Route path="/admin" component={Admin}/>
              <Route render={() => <h1>NOT FOUND</h1>}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
