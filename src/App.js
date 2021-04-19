import React, { createContext } from 'react';
import NavBar from './Components/NavBar'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Auth } from './Firebase'
import Loader from './Components/Loader'
import './style.css'

// ! Router Setup
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Routes/Home'
import UserList from './Routes/UserList'
import Paper from './Routes/Paper'
import AddNewJSON from './Routes/AddNewJSON'


export const USER = createContext();

function App() {
  const [user, loading] = useAuthState(Auth);
  if (loading) return <Loader />
  return (
    <USER.Provider value={user}>
      <BrowserRouter>
        <NavBar user={user} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/:examID">
            <UserList />
          </Route>
          <Route exact path="/:examID/adduserpaper">
            <AddNewJSON />
          </Route>
          <Route exact path="/:examID/:userPaperID">
            <Paper />
          </Route>
          <Route path="*">
            404
          </Route>
        </Switch>
      </BrowserRouter>
    </USER.Provider>
  );
}

export default App;
