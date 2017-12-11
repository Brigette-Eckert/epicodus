import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Contact.css';

// onClick={this.}

class Contact extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    //<div className="likesArea"> Likes: {this.props.likes} <button className="likeBtn"> Like </button></div>

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
