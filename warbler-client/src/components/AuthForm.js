import React, {Component} from 'react';

class AuthForm extends Component {
  constructor(props){
    super(props);
    this.state={
      email:"",
      username:"",
      password:"",
      profileImageUrl:""
    }
}
    handleChange = e =>{
      this.setState=({
        [e.target.name]: e.target.value
      })
    };

    handleSubmit = e => {
      e.preventDefault();
      const authType = this.props.signup ? "signup" : "signin";
      this.props.onAuth(authType, this.state).then(()=>{
        console.log("successfully logged on")
      })
    }


  render(){
    const {email, username, password, profileImageUrl} = this.state;
    const { heading, buttonText, signup } = this.props;
    return (
      <div className="row justify-content-md-center text-center" >
        <div className="col-md-6">
          <form onSubmit={this.handleSubmit}>
            <h2>{heading}</h2>
            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              id="email"
              name="email"
            //  value={email}
              onChange={this.handleChange}
              type="text"
            />

            <label htmlFor="password">Password</label>
            <input
              className="form-control"
              id="password"
              name="password"
              onChange={this.handleChange}
              type="password"
            />

            {signup && (
              <div>
                <label htmlFor="username">Username</label>
                <input
                  className="form-control"
                  id="username"
                  name="username"
                  value={username}
                  onChange={this.handleChange}
                  type="text"
                />

                <label htmlFor="image-url">Image Url</label>
                <input
                  className="form-control"
                  id="image-url"
                  name="profileImageUrl"
                  onChange={this.handleChange}
                  type="text"
                  value={profileImageUrl}
                />
              </div>)}

              <button type="submit" className="btn btn-primary btn-block btn-lg ">
              {buttonText}
              </button>


          </form>
        </div>
      </div>
    )
  }
}

export default AuthForm;
