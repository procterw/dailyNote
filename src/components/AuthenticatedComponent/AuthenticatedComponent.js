import React from 'react';
import { connect } from 'react-redux';

export function requireAuthentication(Component) {

  class AuthenticatedComponent extends React.Component {

    componentWillMount() {

    }

    render () {
      return (
        <div>
          {this.props.isAuthenticated === true
              ? <Component {...this.props}/>
              : <div>Not Authenticated, maybe loading?</div>
          }
        </div>
      )
    }

  }

  const mapStateToProps = function(state){
    return state.root;
  }

  return connect(mapStateToProps)(AuthenticatedComponent);

}
