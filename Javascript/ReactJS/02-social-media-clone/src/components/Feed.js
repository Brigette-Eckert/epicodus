import React from 'react';

import '../styles/components/Feed.css';

class Feed extends React.Component{
  render(){
    return(
      <div id="feed">
        <div className="feed__status">
          <div id="feed__status_icon">
            \_(ʘ_ʘ)_/
          </div>
          <div id="feed__input">
            <input type="text" placeholder="What's Happening?"/>
          </div>
        </div>
        <div className="feed__friend_updates">
          <div className="feed__friend_status">
            <div id="feed__update1">
              <div id="feed__face1" className="feed__face">
                =^.^=
              </div>
              <div className="feed__update_text">
                <h5> Nyan </h5>
                tote bag forage normcore edison bulb fixie gastropub etsy coloring book
              </div>
            </div>
          </div>
          <div className="feed__friend_status">
            <div id="feed__update2">

              <div id="feed__face2" className="feed__face">
                ಠ~ಠ
              </div>
              <div className="feed__update_text">
                <h5> Grumpy Hispter </h5>
                Asymmetrical live-edge edison bulb synth scenester you probably haven't heard of them
              </div>
            </div>
          </div>
          <div className="feed__friend_status">
            <div id="feed__update3">
              <div id="feed__face3" className="feed__face">
                (ᵔᴥᵔ)
              </div>
              <div className="feed__update_text">
                <h5> Otter </h5>
                Unicorn portland man bun mumblecore direct trade four dollar toast
              </div>
              </div>
          </div>
          <div className="feed__friend_status">
            <div id="feed__update4">
              <div id="feed__face4" className="feed__face">
                ◕.◕
              </div>
              <div className="feed__update_text">
                <h5> Cystal Gem </h5>
                Air plant swag messenger bag snackwave, mixtape blog fashion axe vice gluten-free keytar
              </div>
            </div>
          </div>
          <div className="feed__friend_status">
            <div id="feed__update5">
              <div id="feed__face5" className="feed__face">
                ʕ•ᴥ•ʔ
              </div>
              <div className="feed__update_text">
                <h5> Polar Bear</h5>
                Deep v shabby chic direct trade 90's pok pok
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Feed;