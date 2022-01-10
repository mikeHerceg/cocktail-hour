import "./main.scss";
import React, { lazy, Suspense , createContext } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navigation from "./components/navigation/navigation";


const Home = lazy(() => import('./views/home'));
const MyDrinks = lazy(() => import('./views/my-drinks'));

export const Store = createContext();

const initialstate = {
};

export const App = () =>{
  return(
    <Store.Provider value={initialstate}>
      <Router>   
        <Navigation/>
        <Suspense fallback={"loading..."}>
          <Switch>
              <Route path={"/my-drinks"} component={MyDrinks}/>
              <Route path={"/"} component={Home}/>
          </Switch>   
        </Suspense>
      </Router>
    </Store.Provider>
  );
};

export default App;