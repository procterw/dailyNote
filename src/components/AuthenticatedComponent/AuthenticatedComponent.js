import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './AuthenticatedActions.js';
import FacebookLogin from 'react-facebook-login';

export function requireAuthentication(Component) {

  class AuthenticatedComponent extends React.Component {

    componentWillMount() {

    }

    render () {
      return (
        <div>
          {this.props.isAuthenticated === true
              ? <Component {...this.props}/>
              : (
                <FacebookLogin
                  appId="1359842767364554"
                  autoLoad={true}
                  fields="name,email,picture"
                  callback={this.props.facebookResponse.bind(this)} /> 
              )
          }
        </div>
      )
    }

  }
    
  function mapStateToProps(state) {
    return state.root;
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
  }

  return connect(mapStateToProps, mapDispatchToProps)(AuthenticatedComponent);

}