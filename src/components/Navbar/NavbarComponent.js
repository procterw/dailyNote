import React from 'react';

require("./Navbar.scss");

import FacebookLogin from 'react-facebook-login';

class Navbar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return(
      <div className="navbar-component">

        { this.props.name ? (
          <div className="right">
            <img className="profile-picture" src={this.props.photoUrl} />
          </div>
          ) : (
            <FacebookLogin
              appId="1359842767364554"
              autoLoad={true}
              fields="name,email,picture"
              callback={this.props.facebookResponse.bind(this)} />
          )}
      
      </div>
    )
  }

}


export default Navbar
