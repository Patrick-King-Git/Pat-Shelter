import React from 'react';
import './App.css';
import 'react-router';
import {Link, BrowserRouter as Router, Route} from 'react-router-dom';
import DashBoard from './components/DashBoard';
import PetForm from './components/PetForm';
import EditPet from './components/EditPet';
import ViewPet from './components/ViewPet';

function App() {
  return (
    <div className="App">
      <h1>Pet Shelter</h1>
      <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/pets/new">New Pet</Link></li>
        </ul>
        <Route exact path="/" component= {DashBoard} />
        <Route path="/pets/new" component= {PetForm} />
        <Route path="/pet/:_id/edit" component= {EditPet} />
        <Route exact path="/pet/:_id" component= {ViewPet} />
      </Router>
    </div>
  );
}

export default App;
