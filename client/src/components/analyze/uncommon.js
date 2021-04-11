import React, { Component } from 'react'

import { 
	ButtonGroup,
	Button,
} from '@material-ui/core';

class Uncommon extends Component{
    constructor(props){
        super(props)
        this.state = {
            data : this.props.data,
            videoId : this.props.videoId
        }
    }

    componentDidUpdate = (prevProps) => {
        if(prevProps.videoId !== this.props.videoId){
            this.setState({
                data: this.props.data,
                videoId : this.props.videoId
            })
        }
    }

    show = () => {
        this.list.className="visible"
    }

    render(){
        let difficulty = this.state.data.difficulty;
        let analyze = this.state.data.analyze;
        let uncommon = this.state.data.uncommon.join(',');

        return (
            <div className="uncommon">
                <div className="title">
                    uncommon Ratio : <span className="data">{analyze.uncommonRatio}%</span>
                    <ButtonGroup className='buttons' >
						<Button className="btn" onClick={()=>{this.show()}}>
							show
						</Button>
					</ButtonGroup>
                </div>
                <div className="fc">
                    <div className="none" ref={ref=>{this.list = ref}}>{uncommon}</div>
                </div>
            </div>
        )
    }
}

export default Uncommon

