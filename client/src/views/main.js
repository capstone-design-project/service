import React, { Component } from 'react'
import VideocamIcon from '@material-ui/icons/Videocam';
import { TextField , Button} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AutoVideo from 'components/main/autoVideo'
import List from 'components/main/list'
import Api from 'utils/api.js'

class Main extends Component{

    constructor(props){
        super(props);

        this.state = {
            videos : null
        }
    }

    componentDidMount = () => {
        this.getList()
    }

    getList = () => { 
        let list = async () => {
            await this.setState({loading : true})
            const params = {}

            let data = await Api.sendPost('/video/list', params).then(res=>{
                return res
            })
            return data
        }

        list().then(res => {
            this.setState({
                loading: false,
                videos: res.data.data,
                tops : res.data.top
            })
        })
    }
    
    render() {

        return (
            <div className="main">
                {this.state.loading ?
                    <div className="loading">
                        Loading ...
                    </div>
                    : null
                }
                {(!!this.state.videos && !!this.state.tops) && 
                    <div>
                        <AutoVideo videos={this.state.tops}/>
                        <List videos={this.state.videos}/>               
                    </div>
                }

            </div>
        )
    }
}

export default Main