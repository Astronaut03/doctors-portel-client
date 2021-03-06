import React, { createContext, useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Appointment from "./components/Appointment/Appointment/Appointment";
import Login from "./components/Login/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import AllPatients from "./components/AllPatients/AllPatients/AllPatients";
import AddDoctor from "./components/AddDoctor/AddDoctor";
import Contact from "./components/Home/Contact/Contact";
import Blogs from "./components/Home/Blogs/Blogs";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";




export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/appointment">
          <Appointment> </Appointment>
        </Route>
        {/* <Route path="/dashboard">
          <Dashboard></Dashboard>
        </Route>
        <Route path="/allPatients">
          <AllPatients></AllPatients>
        </Route> */}
        <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/allPatients">
            <AllPatients></AllPatients>
          </PrivateRoute>
        <Route path="/addDoctor">
            <AddDoctor></AddDoctor>
          </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/blog">
          <Blogs></Blogs>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
