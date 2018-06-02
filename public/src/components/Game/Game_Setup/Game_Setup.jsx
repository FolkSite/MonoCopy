import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { FormControl, Button } from 'react-bootstrap';

class Game_Setup extends Component {

    constructor(props){
        super(props)
    }

    handleChange = (e) => {
    }

    render() {

        let players = [];
        let options = [];

        return (
            <div>
                <FormControl>
                </FormControl>
                <Link to={`/monopoly`}> Start game </Link>  
            </div>
        );
    }

}

export default Game_Setup;