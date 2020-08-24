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
          <Route path="/monday">
            <DayDetail day="monday" />
          </Route>
          <Route path="/tuesday">
            <DayDetail day="tuesday" />
          </Route>
          <Route path="/wednesday">
            <DayDetail day="wednesday" />
          </Route>
          <Route path="/thursday">
            <DayDetail day="thursday" />
          </Route>
          <Route path="/friday">
            <DayDetail day="friday" />
          </Route>
          <Route path="/saturday">
            <DayDetail day="saturday" />
          </Route>
          <Route path="/sunday">
            <DayDetail day="sunday" />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <div>Desarrollo por: Jan Acuna</div>
    </Router>
  );
}

function DayDetail (props){
  return <h1>detail {props.day}</h1>
}