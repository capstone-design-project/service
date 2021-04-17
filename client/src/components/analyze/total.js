import React, { Component } from 'react'


class Total extends Component{
    constructor(props){
        super(props)
        this.state = {
            data : this.props.data,
            videoId : this.props.videoId
        }
    }


    makeAnimation =() => {
        let analyze = this.state.data.analyze;
        let tw_num = analyze.totalWords;
        let tuw_num = analyze.totalUniqueWords;
        let ts_num = analyze.totalSentences;
        let tw_cnt =0;
        let tuw_cnt=0;
        let ts_cnt=0;
        let tw_target = this.tw
        let tuw_target = this.tuw
        let ts_target = this.ts

        let twInterval =  setInterval(()=>{
            if(tw_cnt===tw_num) { 
                clearInterval(twInterval)
            }else{
                tw_cnt++;
                tw_target.innerHTML = tw_cnt;
            }
        }, 0.5)


        let tuwInterval =  setInterval(()=>{
            if(tuw_cnt===tuw_num) { 
                clearInterval(tuwInterval)
            }else{
                tuw_cnt++;
                tuw_target.innerHTML = tuw_cnt;
            }
        }, 4)


        let tsInterval =  setInterval(()=>{
            if(ts_cnt===ts_num) { 
                clearInterval(tsInterval)
            }else{
                ts_cnt++;
                ts_target.innerHTML = ts_cnt;
            }
        }, 4)
    }


    componentDidMount =() => {

        this.makeAnimation()
  
    }


    componentDidUpdate = (prevProps) => {
        if(prevProps.videoId !== this.props.videoId){
            this.setState({
                data: this.props.data,
                videoId : this.props.videoId
            },()=>{this.makeAnimation()})
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
                    <div className="data" ref={ref=>{this.tw=ref}}></div>
                </div>
                <div className="item">
                    <div className="title">totalUniqueWords</div>
                    <div className="data" ref={ref=>{this.tuw=ref}}></div>
                </div>
                <div className="item">
                    <div className="title">totalSentences</div>
                    <div className="data" ref={ref=>{this.ts=ref}}></div>
                </div>
            </div>
        )
    }
}

export default Total