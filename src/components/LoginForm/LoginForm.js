import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import axios from "axios"

class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
  
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log("handleSubmit")

        axios
            .post("localhost:3000/user/", {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log("login response: ")
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: "/"
                    })
                }
            }).catch(error => {
                console.log("login error: ")
                console.log(error);
                
            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div>
                    <a href="/auth/facebook">Login with Facebook</a>
                    <h4>Login</h4>
                    <form className="form-horizontal">
                        <div className="form-group">
                            <div className="col-1 col-ml-auto">
                                <label className="form-label" htmlFor="username">Username</label>
                            </div>
                            <div className="col-3 col-mr-auto">
                                <input className="form-input"
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-1 col-ml-auto">
                                <label className="form-label" htmlFor="password">Password: </label>
                            </div>
                            <div className="col-3 col-mr-auto">
                                <input className="form-input"
                                    placeholder="password"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group ">
                            <div className="col-7"></div>
                            <button
                                className="btn btn-primary col-1 col-mr-auto"
                               
                                onClick={this.handleSubmit}
                                type="submit">Login</button>
                        </div>
                    </form>
                </div>
            )
        }
    }
}

export default LoginForm;



// import React, { useState } from "react";
// import {
//   Form,
//   FormGroup,
//   FormControlLabel,
//   FormControl,
//   Button
// } from "rsuite";
// import "rsuite/lib/styles/index.less";

// function LoginForm() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function validateForm() {
//     return email.length > 0 && password.length > 0;
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//   };

//   return (
//     <div className="Login">
//       <Form action="/login" method="post" onSubmit={handleSubmit}>
//         <FormGroup size="lg" controlId="email">
//           <FormControlLabel>Email</FormControlLabel>
//           <FormControl
//             autoFocus
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </FormGroup>
//         <FormGroup size="lg" controlId="password">
//           <FormControlLabel>Password</FormControlLabel>
//           <FormControl
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </FormGroup>
//         <Button id="login-buttons" className="account-btn" size="lg" block type="submit" disabled={!validateForm()}>
//           Login
//         </Button>
//         <Button id="login-buttons" className="account-btn" size="lg" block>
//             Create Account
//           </Button>
//       </Form>
//     </div>
//   );
// };

// export default LoginForm;
