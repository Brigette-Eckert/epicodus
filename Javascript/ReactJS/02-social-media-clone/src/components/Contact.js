import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Contact.css';

class Contact extends React.Component {
  render(){
    let specialAreaContent = null;
    if(this.props.likesVisible){
      specialAreaContent = <div className="likesArea"> Likes: {this.props.likes} <button className="likeBtn"> Like </button></div>
    } if(this.props.addVisible){
      specialAreaContent = <button className="addBtn"> Add </button>
    }
    return (
      <div className="contact__info">
        <div id="contact__update">
          <div className="contact__face" style={{backgroundColor: this.props.color}}> {this.props.face} </div>
          <div className="contact__update_text">
            <h5> {this.props.name} </h5>
            {this.props.status}
          </div>
          <div>
            {specialAreaContent}
          </div>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  face: PropTypes.string.isRequired,
  status: PropTypes.string,
  color: PropTypes.string.isRequired,
  likes: PropTypes.number,
  likesVisible: PropTypes.bool,
  addVisible: PropTypes.bool,
};

export default Contact;
