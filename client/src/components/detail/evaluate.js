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
                        <Button color="primary" variant="contained" style={{width: "400px", height: "50px"}}>
                            Evaluate
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default Evaluate