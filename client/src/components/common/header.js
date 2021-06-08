import React, { Component } from 'react'
import VideocamIcon from '@material-ui/icons/Videocam';
import { TextField , Button} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import 'scss/header.scss'
import Signup from './signup'
import Signin from './signin'
import getUser from 'utils/getUser'
import Cookies from 'js-cookie'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


class Header extends Component{

    constructor(props){
        super(props);
        this.state = {
            inOpen : false,
            upOpen: false,
            user: null,
            isAnalyze: false,
            search: '',
        }
    }

    componentDidMount = () => { 
        if (Cookies.get('jwt')) {
            getUser.get().then(user => {
                this.setState({
                    user 
                })
            })
        }
    }

    inClose = () => { 
        this.setState({
            inOpen : false,
        })        
    }


    upClose = () => { 
        this.setState({
            upOpen : false,
        })
    }

    logout = () => { 
        this.setState({
            user : null
        }, () =>
            {
                Cookies.remove('jwt')
                window.location.reload()
            }
        )
    }

    handleSwitch = () => { 
        this.setState({
            isAnalyze : !this.state.isAnalyze
        })
    }


    handleChange = (e) => { 
        this.setState({
            search : e.target.value
        })
    }

    handleSubmit = () => { 
        if (!this.state.isAnalyze) {
            window.location.href = `/search?content=${this.state.search}`
        } else { 

            


        }
    }

    render() {
        const user = this.state.user;

        return (
            <div className="header">
                <div className="left">
                    <div className="logo">
                        <a href='/'><div className="title">LearnTube</div></a>
                        <VideocamIcon className="icon"/>
                    </div>
                    { !!user && <a href='/save'><div>saved video</div></a>}
                    {!!user && <a href='/show'><div>watched video</div></a>}
                    <a href="/analyze"><div>analyze</div></a>
                </div>
                <div className="right">
                    <div className="search">
                        {/* <FormControlLabel
                            control={
                            <Switch
                                checked={this.state.isAnalyze}
                                onChange={(e) => this.handleSwitch(e)}
                                color="primary"
                            />
                            }
                            label="Analyze"
                        /> */}
                        <TextField
                        className="title"
                        variant="outlined"
                        fullWidth
                        value={this.state.videoId}
                        onChange={e=> this.handleChange(e)}
                        onKeyDown={e=> {if(e.keyCode===13) this.handleSubmit()}}
                        />
                        <SearchIcon className="icon" onClick={()=>{this.handleSubmit()}}/>
                    </div>
                    {!!this.state.user ?
                        <div className="name">
                            {this.state.user.name}
                        </div>
                        :
                        <div>
                            <Button className="btn log" variant="contained" color="primary" onClick={() => { this.setState({ inOpen: true }) }}>Sign in</Button>
                            {this.state.inOpen && <Signin close={this.inClose} />}
                        </div>                    }
                    {!!this.state.user ?
                        <div>
                            <Button className="btn" variant="contained" color="secondary" onClick={() => {this.logout()}}>Log out</Button>
                        </div>                        
                        :
                        <div>
                            <Button className="btn log" variant="contained" color="primary" onClick={() => { this.setState({ upOpen: true }) }}>Sign up</Button>
                            {this.state.upOpen && <Signup close={this.upClose}/>}
                        </div>
                    }


                </div>
            </div>
        )
    }
}

export default Header