import "./main.scss";
import React, { lazy, Suspense } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navigation from "./components/navigation/navigation";

const Home = lazy(() => import('./views/home'));
const MyDrinks = lazy(() => import('./views/my-drinks'));

export const App = () =>{
  return(
    <>
   
    <Router>   
      <Navigation/>
      <Suspense fallback={"loading..."}>
        <Switch>
            <Route path={"/my-drinks"} component={MyDrinks}/>
            <Route path={"/"} component={Home}/>
        </Switch>   
      </Suspense>
    </Router>
    </>
  );
};

export default App;