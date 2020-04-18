import React from 'react';
import NavBar from './Containers/NavBar';
import Movies from './Containers/Movies';
import {Route, Switch, Redirect} from 'react-router-dom';
import Customers from './Containers/Customers';
import Rentals from './Containers/Rentals';
import Home from './Containers/Home';
import NF from './Containers/NF';
import Login from './Containers/Login';
import Register from './Containers/Register';
import SpecMovie from './Component/Movies/SpecMovie';
import NewMovie from './Component/Movies/NewMovie';


function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Switch>
          <Route path="/movies/:id" component={SpecMovie} />
          <Route path ="/movies" component= {Movies} />
          <Route path ="/login" component= {Login} />
          <Route path="/register" component={Register} />
          <Route path ="/newmovie" component= {NewMovie} />
          <Route path ="/rentals" component= {Rentals} />
          <Route path ="/not-found" component= {NF} />
          <Route path ="/customers" component= {Customers} />
          <Route path ="/" exact component= {Home} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
