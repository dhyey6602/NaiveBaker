import './App.css';
import React from "react";
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginSignup from "./Pages/LoginSignup"
import Home from "./Pages/Home"
import RecipePage from "./Pages/Recipe-page"
import Dashboard from "./Pages/Dashboard"
import PublicProfile from './Pages/PublicProfile';
import UploadRecipe from './Pages/UploadRecipe';
import ForgetPassword from './Pages/ForgetPassword';
import SearchPage from './Pages/SearchPage';
import { AuthDispatchContext, UserDispatchContext, RecipeDispatchContext } from './Contexts/context';

function App() {

  const { setU } = useContext(UserDispatchContext);
  const { setA } = useContext(AuthDispatchContext);
  const { setR } = useContext(RecipeDispatchContext);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetch = () => {

      setIsError(false);

      axios
        .get(`https://naivebakerr.herokuapp.com/recipe/all`)
        .then(({ data }) => {
          if (data.ok === true) {
            setR(data.data.recipe);
            setIsError(false);
          } else {
            setIsError(true);
          }
        }
        )
        .catch(err => {
          setIsError(true);
        })
    }

    fetch();

    const auth = localStorage.getItem('auth-token');
    if (auth !== null) {
      axios
        .get(`https://naivebakerr.herokuapp.com/user/detail`, {
          headers: {
            'auth-token': auth
          }
        })
        .then(({ data }) => {
          if (data.ok === true) {
            setU(data.data);
            setA(true);
            setIsError(false);
          } else {
            setIsError(true);
          }
        })
        .catch(err => {
          setIsError(true);
        })
    }
  }, [])

  return (
    <>
      {isError && <div>Something went wrong ...</div>}

      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/LoginSignup">
            <LoginSignup />
          </Route>
          <Route path="/Dashboard">
            <Dashboard />
          </Route>
          <Route path="/RecipePage">
            <RecipePage />
          </Route>
          <Route path="/PublicProfile">
            <PublicProfile />
          </Route>
          <Route path="/Upload">
            <UploadRecipe />
          </Route>
          <Route path="/ResetPassword">
            <ForgetPassword />
          </Route>
          <Route path="/SearchPage">
            <SearchPage />
          </Route>
          <Route path="/ForgetPassword">
            <ForgetPassword />
          </Route>
        </Switch>
      </BrowserRouter>

    </>
  );
}

export default App;
