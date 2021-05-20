import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import 'scss/analyze.scss'

class Search extends Component {
    constructor(props){
        super(props);
        this.state  = {
            videoId : null
        }
    }

    handleChange = (e) => {
        this.setState({
            videoId : e.target.value
        })
    }


    handleSubmit = () => {
        this.props.onSubmit(this.state.videoId)
        this.setState({
            videoId : ""
        })
    }


    render(){
        return(
            <div className="search">
 				<TextField
                    className="title"
                    variant="outlined"
                    placeholder="search video"
                    fullWidth
                    onChange={(e) => {this.handleChange(e) }}
                />
                <SearchIcon className="icon"  onClick={(e) => { this.handleSubmit()}}/>
            </div>
        )
    }
}


export default Search;