import React, { Component } from 'react'
import VideocamIcon from '@material-ui/icons/Videocam';
import { TextField , Button} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AutoVideo from 'components/main/autoVideo'
import List from 'components/main/list'

class Main extends Component{

    constructor(props){
        super(props);

        this.state  = {
        }
    }

    componentDidMount = () => {
    }

    
    render(){
        return (
            <div className="main">
                <AutoVideo />
                <List/>
            </div>
        )
    }
}

export default Main