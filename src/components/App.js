import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import Game from "./Game";

import useInterval from "../hooks/use-interval.hook";

import { GameContext } from "./GameContext";

const CookieCountContext = React.createContext(null);
const PurchasesCountContext = React.createContext(null);

export const useCookieCount = () => {
  return React.useContext(CookieCountContext);
};
export const usePurchasesCount = () => {
  return React.useContext(PurchasesCountContext);
};

function App(props) {
  const {
    numCookies,
    setNumCookies,
    purchasedItems,
    setPurchasedItems,
    cookiesPerSecond,
  } = useContext(GameContext);
  useInterval(() => {
    const numOfGeneratedCookies = cookiesPerSecond;

    setNumCookies(numCookies + numOfGeneratedCookies);
  }, 1000);

  window.onbeforeunload = () => {
    localStorage.setItem("left", JSON.stringify(Date()));
  };

  useEffect(() => {
    if (localStorage.getItem("left")) {
      const lastSession = new Date(JSON.parse(localStorage.getItem("left")));
      const timeNow = new Date();
      const secondsDiff = (timeNow.getTime() - lastSession.getTime()) / 1000;
      setNumCookies(numCookies + Math.floor(secondsDiff * cookiesPerSecond));
    }
  }, []);

  return (
    <>
      <CookieCountContext.Provider value={{ numCookies, setNumCookies }}>
        <PurchasesCountContext.Provider
          value={{ purchasedItems, setPurchasedItems }}
        >
          <GlobalStyles />
          <Router>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/game">
              <Game cookiesPerSecond={cookiesPerSecond} />
            </Route>
          </Router>
        </PurchasesCountContext.Provider>
      </CookieCountContext.Provider>
    </>
  );
}

export default App;
