import React, {Component} from 'react';
import axios from 'axios';
import io from 'socket.io-client';

class Signup extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
            username: '',
            authError: ''
        }
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }

    handlePasswordChange(e) {
        this.setState({  password: e.target.value });
    }

    handleUsernameChange(e) {
        this.setState({  username: e.target.value });
    }

    async signUp() {
       
        this.socket =  io.connect('http://localhost:9002', {
            query: {
                username: this.state.username,  
            }
        })
         this.socket.disconnect()
         console.log('user disconnected')
        // let message;
        // let redirect;

        // try {
        //     const data = await axios.post('/auth/signUp', {
        //         email: this.state.email,
        //         password: this.state.password,
        //         username: this.state.username,
        //     })
        //     redirect = true;
        // } catch (err) {
        //     console.log(err)
        // } finally {
        //     this.props.history.push('/')
        // }
    }

    render() {
        return (
            <div className="signupform">
                <form>
                    <div className="field">
                    <div className="control">
                        <input
                        className="input is-large clearField"
                        type="username"
                        name="username"
                        placeholder="Your Username"
                        onChange={e => this.handleUsernameChange(e)}
                        />
                    </div>
                    </div>
                    {/* <div className="field">
                    <div className="control">
                        <input
                        className="input is-large clearField"
                        type="password"
                        name="password"
                        placeholder="Your Password"
                        onChange={e => this.handlePasswordChange(e)}
                        />
                    </div>
                    </div> */}
                    <button>
                        <a id='submit'
                            onClick={() => this.signUp()}
                            className="button is-block is-primary is-large is-fullwidth">
                            Sign Up
                        </a>
                    </button>

                </form>
                  <div className="authError">
                        <h3 className="title has-text-red">      {this.state.authError} </h3>
                  </div>
                {/* <p className="has-text-grey">
                  <Link to="/login">Login</Link> &nbsp;·&nbsp;
                  <Link to="/">Forgot Password</Link>
                </p> */}
            </div>    
        )
    }
}

export default Signup;