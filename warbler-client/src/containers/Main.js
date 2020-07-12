import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';
import {authUser} from '../store/actions/auth'

const Main = props => {
  const {authUser} = props;
    return(
        <div className="container">
            <Switch>
            <Route exact path ='/' render={props => <Homepage {...props}/>}/>
            <Route exact path='/signin' render={props => {
              return (
                <AuthForm onAuth={authUser} buttonText="Log in" heading="Welcome back" signup {...props}/>
              )
            }}/>
            <Route exact='/signup' render={props => {
              return (
                <AuthForm onAuth={authUser} buttonText="Sign up" heading="Join Warbler today" {...props}/>
              )
            }}/>
            </Switch>
        </div>
    )
}

function MapStatesToProps(state){
    return {
        currentState : state.currentState
    }
}
export default withRouter(connect(MapStatesToProps, {authUser})(Main))
