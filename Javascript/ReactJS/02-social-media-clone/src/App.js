import React, { Component } from 'react';

import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import AboutCard from './components/AboutCard';
import Feed from './components/Feed';
import SuggestedContacts from './components/SuggestedContacts';

import './styles/App.css';

let profile = {
  name: "Kellie A. Corrigan",
  tweets: 101,
  following: 102,
  followers: 103
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
          <div className="row">
            <div className="col-md-4">
              <ProfileCard profile={profile}/>
              <AboutCard/>
            </div>
            <Feed/>
            <SuggestedContacts/>
          </div>
      </div>
    );
  }
}

export default App;
