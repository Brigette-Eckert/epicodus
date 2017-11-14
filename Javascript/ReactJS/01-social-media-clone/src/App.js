import React, { Component } from 'react';

import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
          <div className="row">
            <div className="col-md-4">
              <ProfileCard/>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
