import "./main.scss";
import React, { lazy, Suspense } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const Home = lazy(() => import('./views/home'));
const MyDrinks = lazy(() => import('./views/my-drinks'));

export const App = () =>{
  return(
    <Router>   
      <Switch>
        <Suspense fallback="loading...">
          <Route path={"/"}>
              <Home/>
          </Route>
          <Route path={"/my-drinks"}>
              <MyDrinks/>
          </Route>
        </Suspense>
      </Switch>   
    </Router>
  );
};

export default App;