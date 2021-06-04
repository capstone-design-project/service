import react, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Api from 'utils/api.js'
import getUser from 'utils/getUser'
import Cookies from 'js-cookie';
import { select } from 'react-cookies';


class Evaluate extends Component { 

    constructor(props){
        super(props);
        this.state = {
            open: true,
            value: 'normal',
        }
    }
   
    componentDidMount = () => { 
        
    }

    handleChange = (e) => { 
        this.setState({
            value: e.target.value
        })
    }


    handleEvaluate = () => { 

        if (Cookies.get('jwt')) {
            getUser().then(async (user) => {
                let difficulty = this.props.video.difficulty;
                let select = this.state.value
                let level = user.level
                let ulevel;
       


                if (select === 'easy') {//2단계 점프는 없음 
                    if (level === 0) {//user level
                        if (difficulty == 0) {
                            ulevel = 1;
                        } else if (difficulty === 1) {
                            ulevel = 1;
                        } else if (difficulty === 2) { 
                            ulevel = 1;
                        }
                    }

                    if (level === 1) { 
                        if (difficulty == 0) {
                            ulevel = 1;
                        } else if (difficulty === 1) {
                            ulevel = 2;
                        } else if (difficulty === 2) { 
                            ulevel = 2;
                        }
                    }

                    if (level === 2) { 
                        if (difficulty == 0) {
                            ulevel = 2;
                        } else if (difficulty === 1) {
                            ulevel = 2;
                        } else if (difficulty === 2) { 
                            ulevel = 2;
                        }
                    }
                }


                if (select === 'normal') {
                    if (level === 0) {
                        if (difficulty == 0) {
                            ulevel = 0;
                        } else if (difficulty === 1) {
                            ulevel = 1;
                        } else if (difficulty === 2) { 
                            ulevel = 1;
                        }
                    }

                    if (level === 1) { 
                        if (difficulty == 0) {
                            ulevel = 0;
                        } else if (difficulty === 1) {
                            ulevel = 1;
                        } else if (difficulty === 2) { 
                            ulevel = 2;
                        }
                    }

                    if (level === 2) { 
                        if (difficulty == 0) {
                            ulevel = 1;
                        } else if (difficulty === 1) {
                            ulevel = 2;
                        } else if (difficulty === 2) { 
                            ulevel = 2;
                        }
                    }
                }


                if (select === 'hard') {
                    if (level === 0) {
                        if (difficulty == 0) {
                            ulevel = 0;
                        } else if (difficulty === 1) {
                            ulevel = 0;
                        } else if (difficulty === 2) {
                            ulevel = 0;
                        }
                    }
    
                    if (level === 1) {
                        if (difficulty == 0) {
                            ulevel = 0;
                        } else if (difficulty === 1) {
                            ulevel = 0;
                        } else if (difficulty === 2) {
                            ulevel = 1;
                        }
                    }
    
                    if (level === 2) {
                        if (difficulty == 0) {
                            ulevel = 0;
                        } else if (difficulty === 1) {
                            ulevel = 1;
                        } else if (difficulty === 2) {
                            ulevel = 1;
                        }
                    }
                }
                
                const params = {
                    userIdx : user.idx,
                    level : ulevel,
                }
                console.log(difficulty)
                console.log(user.level)
                console.log(ulevel)
                await Api.sendPost('/video/evaluate', params).then(res => {
                    alert('evalute complete')
                    this.props.close();
                    this.setState({ open: false });
                })
            })
        }
    }

    render() { 
        return (
            <div className="video-evaluate">
                <Dialog className="contain" open={this.state.open} onClose={() => { this.props.close(); this.setState({ open: false }) }} fullWidth={ true}>
                    <DialogTitle id="form-dialog-title" style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize : 50
                    }}>Evaluate
                    </DialogTitle>
                    <DialogContent style={{display : "flex", justifyContent: "center"}}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Evaluate</FormLabel>
                            <RadioGroup name="evaluate" value={this.state.value} onChange={(e) => this.handleChange(e)} row>
                                <FormControlLabel style={{
                                    marginLeft: 30 , marginRight:30}} value="easy" control={<Radio />} label="easy" fullWidth />
                                <FormControlLabel style={{
                                    marginLeft: 30 , marginRight:30}}value="normal" control={<Radio />} label="normal" />
                                <FormControlLabel style={{
                                    marginLeft: 30 , marginRight:30}}value="hard" control={<Radio />} label="hard" />
                            </RadioGroup>
                        </FormControl>
                    </DialogContent> 
                    <DialogActions style={{justifyContent: "center", marginBottom:30}}>
                        <Button color="primary" variant="contained" style={{ width: "400px", height: "50px" }} onClick={() => {this.handleEvaluate()}}>
                            Evaluate
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default Evaluate