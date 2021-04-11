import React, { Component } from 'react'


class Total extends Component{
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



    render(){
        let difficulty = this.state.data.difficulty;
        let analyze = this.state.data.analyze;
        let uncommon = this.state.data.uncommon;

        return(
            <div className="total">
                <div className="item">
                    <div className="title">totalWords</div>
                    <div className="data">{analyze.totalWords}</div>
                </div>
                <div className="item">
                    <div className="title">totalUniqueWords</div>
                    <div className="data">{analyze.totalUniqueWords}</div>
                </div>
                <div className="item">
                    <div className="title">totalSentences</div>
                    <div className="data">{analyze.totalSentences}</div>
                </div>
            </div>
        )
    }
}

export default Total