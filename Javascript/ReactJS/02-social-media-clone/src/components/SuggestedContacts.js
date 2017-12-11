import React from 'react';
import Contact from './Contact';

import '../styles/components/SuggestedContacts.css';

class SuggestedContacts extends React.Component {
  render(){
    return(
      <div id="contacts__suggested_contacts_list">
        <h5 id="title">Suggested Contacts</h5>
        <div className="contacts__suggested_people">
          <Contact
            name="Jake"
            face="❍ᴥ❍ʋ"
            color="yellow"

          />
          <Contact
            name="Shades"
            face="⌐■_■"
            color="Orange"
          />
          <Contact
            name="Dr. Monocle"
            face="ಠ_ರೃ"
            color="Red"
          />
        </div>
      </div>
    )
  }
}

export default SuggestedContacts;
