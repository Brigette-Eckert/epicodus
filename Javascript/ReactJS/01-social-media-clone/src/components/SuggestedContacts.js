import React from 'react';

import '../styles/components/SuggestedContacts.css';

class SuggestedContacts extends React.Component {
  render(){
    return(
      <div id="contacts">
        <h5 id="title">Suggested Contacts</h5>
        <div className="contacts__people">
          <div id="contacts__person1">
            <h5 className="contacts__name"> Jake </h5>
            <div className="contacts__face"> ❍ᴥ❍ʋ </div>
            <button className="contacts__button"> Button </button>
          </div>
          <div id="contacts__person2">
            <h5 className="contacts__name">Shades</h5>
            <div className="contacts__face"> (⌐■_■) </div>
            <button className="contacts__button"> Button </button>
          </div>
          <div id="contacts__person3">
            <h5 className="contacts__name"> Mr. Moncole </h5>
            <div className="contacts__face"> ಠ_ರೃ </div>
            <button className="contacts__button"> Button </button>
          </div>
        </div>
      </div>
    )
  }
}

export default SuggestedContacts;