import "./main.scss";
import React, { lazy, Suspense , createContext, useState, useMemo } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navigation from "./components/navigation/navigation";


const Home = lazy(() => import('./views/home'));
const MyDrinks = lazy(() => import('./views/my-drinks'));

export const GlobalContext = createContext({
  globalState:{},
  setGlobalState:()=>{}
});

export const App = () =>{
  const initialstate = {};

  const [globalState, setGlobalState] = useState(initialstate);
  const value = useMemo(()=>({ globalState, setGlobalState }));

  return(
    <GlobalContext.Provider value={value}>
      <Router>   
        <Navigation/>
        <Suspense fallback={"loading..."}>
          <Switch>
              <Route path={"/my-drinks"} component={MyDrinks}/>
              <Route path={"/"} component={Home}/>
          </Switch>   
        </Suspense>
      </Router>
    </GlobalContext.Provider>
  );
};

export default App;