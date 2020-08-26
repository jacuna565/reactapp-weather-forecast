import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import DayDetail from "./components/DayDetail";
import Loader from "./components/Loader";
import logo from "./assets/logo.png";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const weatherReducer = useSelector((state) => state.weatherReducer);

  useEffect(() => {
    setTimeout(() => {
      showLoader();
    }, 2000);
  }, []);

  const showLoader = () => {
    !weatherReducer.isLoading && setIsLoading(false);
  };
  let rndr;

  if (isLoading) {
    rndr = (
      <div className="app-loading">
        <img src={logo} alt="Logo" className="logo" />
        <div className="loader-container">
          <Loader />
        </div>
      </div>
    );
  } else {
    rndr = (
      <Router>
        <div className="app-container">
          <Header />
          <Switch>
            <Route
              path="/:path"
              children={
                <>
                  <Home />
                  <DayDetail />
                </>
              }
            />
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

  return rndr;
}
