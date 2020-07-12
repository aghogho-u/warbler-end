import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import logo from '../images/eye.jpg'

class Navbar extends Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <Link to="/" className="navbar-brand">
                            <img src={logo} alt="Warbler Home" />
                        </Link>
                        </div>

                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link to="/signup">Sign Up</Link>
                            </li>
                            <li>
                                <Link to="/signin">Sign In</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, null)(Navbar);
