import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Contact.css';


class Contact extends React.Component {
// set state to change to request sent when add clicked?
  render(){
    return (
      <div className="contact__info">
        <div id="contact__update">
          <div className="contact__face" style={{backgroundColor: this.props.color}}> {this.props.face} </div>
          <div className="contact__update_text">
            <h5> {this.props.name} </h5>
            {this.props.status}
          </div>
          <div>
            <button className="addBtn"> Add </button>
          </div>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  face: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Contact;
