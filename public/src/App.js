import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Board from './components/Board'
import io from 'socket.io-client';
import Auth from './components/Auth/Auth';
import Signup from './components/Auth/Signup';



class App extends  React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
        }
        this.handleUsername = this.handleUsername.bind(this);    
    }

    
    componentWillMount() {
        this.socket = io('http://localhost:9002')
    }

    componentDidMount() {
        this.socket.on('sendUsername', this.handleUsername)
        //this.handleUsername)
    }
    
    handleUsername(name) {
        console.log(name.username)
        //this.setState({ username: name})
    }

    render() {
        if (this.state.username) {
                return (
                    <div>
                        <div>Welcome to my App</div>
                        <Board />
                    </div>
                )
        } else {
            return (
                <div>
                    <Signup socket={this.socket}/>
                </div>    
            )
        }
    } 

}

export default App;