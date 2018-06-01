import React from 'react';
//import PropTypes from 'prop-types';

class Auth extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            open: false,
            email: '',
            password: ''
        }
    }


    render() {
        return (
            <div>
                <input className="username"/>
            </div>    
        )
    }

}

export default Auth;