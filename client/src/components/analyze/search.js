import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import 'scss/Analyze.scss'

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
                placeholder="Enter video id"
                fullWidth
                value={this.state.videoId}
                onChange={e=> this.handleChange(e)}
                onKeyDown={e=> {if(e.keyCode===13) this.handleSubmit()}}
                />
                <SearchIcon className="icon" onClick={()=>{this.handleSubmit()}}/>
            </div>
        )
    }
}


export default Search;