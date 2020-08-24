import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/monday">
            <Home />
          </Route>
        </Switch>
      </div>
      <div>Desarrollo por: Jan Acuna</div>
    </Router>
  );
}