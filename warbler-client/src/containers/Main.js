import React from 'react';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Homepage from './Homepage';

const Main = props => {
    return(
        <div className="container">
            <Switch>
            <Route exact='/' render={props => <Homepage {...props}/>}/>
            </Switch>
        </div>
    )
}

function MapStatesToProps(state){
    return {
        currentState : state.currentState
    }
}
export default withRouter(connect(MapStatesToProps, null)(Main))
