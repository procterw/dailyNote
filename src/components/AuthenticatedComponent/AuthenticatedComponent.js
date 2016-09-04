import React from 'react';
import { connect } from 'react-redux';

export function requireAuthentication(Component) {

  class AuthenticatedComponent extends React.Component {

    componentWillMount() {
      // console.log(this.props);
      // console.log("authhh")
    }

    render () {
      // console.log("rendinger")
      return (
        <div>
          {this.props.isAuthenticated === true
              ? <Component {...this.props}/>
              : <div>Loadinggggg</div>
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
