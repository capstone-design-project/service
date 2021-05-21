import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Api from 'utils/api.js'
import Cookies from 'js-cookie';


class Signin extends Component { 

    constructor(props){
        super(props);
        this.state = {
            open: true,
            email: null,
            password: null,
        }
    }

    componentDidMount = () => {

        
    }


    handleClick = async() => { 
        const state = this.state;

        if (!state.email || !state.password) { 
            alert('please enter all input')
            return;
        }

        const params = {
            email: state.email,
            password: state.password
        }


        await Api.sendPost('/user/signin', params).then(res => {
            if (res.data.status === 'ok') {
                alert(res.data.message);
                this.setState({
                    email: null,
                    password: null,
                }, () => {
                    this.props.close();
                    Cookies.set('jwt', res.data.token, { path: '/' })
                    window.location.reload()
                })
            } else { 
                alert(res.data.message)
            }
        })
    }


    render() { 
        return (
            <div className="signin">
                <Dialog className="contain" open={this.state.open} onClose={() => { this.props.close(); this.setState({ open: false }) }} fullWidth={ true}>
                    <DialogTitle id="form-dialog-title" style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize : 50
                    }}>Sign in
                    </DialogTitle>
                    <DialogContent style={{display : "flex", justifyContent: "center"}}>
                        <TextField
                            margin="dense"
                            label="Email Address"
                            type="email"
                            fullWidth={true}
                            onChange={(e) => { this.setState({email: e.target.value})}}
                            style={{
                                width: 470,
                                marginTop : 25,
                                marginBottom:25
                            }}
                        />
                    </DialogContent>
                    <DialogContent style={{display : "flex", justifyContent: "center"}}>
                        <TextField
                            margin="dense"
                            label="password"
                            type="password"
                            fullWidth={true}
                            onChange={(e) => { this.setState({password: e.target.value})}}
                            style={{
                                width: 470,
                                marginBottom:50 
                            }}
                        />
                    </DialogContent>
                    <DialogActions style={{justifyContent: "center", marginBottom:30}}>
                        <Button color="primary" variant="contained" style={{width: "400px", height: "50px"}} onClick={() => { this.handleClick()}}>
                            Sign In
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default Signin