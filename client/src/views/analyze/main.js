import React, { Component } from 'react'
import Search from 'components/analyze/search'
import Total from 'components/analyze/total'
import Chart from 'components/analyze/chart'
import Uncommon from 'components/analyze/uncommon'

import 'scss/Analyze.scss'
import Api from 'utils/api.js'

class Analyze extends Component {
    constructor(props){
        super(props);
        this.state  = {
            data : null,
        }
    }

    onSubmit = (videoId) => {

        let analyze = async(videoId) => {
            await this.setState({loading : true})
            
            const params = {
                id : videoId
            }

            let data = await Api.sendPost('/video/analyze', params).then(res=>{
                return res
            })
            return data
        }

        analyze(videoId).then(res=>{
            this.setState({
                loading : false,
                data : res.data.data,
                videoId
            })
        })
    }

    render(){
        let state = this.state

        return(
            <div className="analyze">
                {state.loading ?
                        <div className="loading">
                            Loading ...
                        </div>
                        : null
                }
 				<Search onSubmit = {this.onSubmit}/>

                {!! state.data ? 
                    <div>
                        <div className="difficulty">The difficulty of video ID <span className="video">'{state.videoId}'</span> is <span className="score">{state.data.difficulty}</span></div>
                        <Total data={state.data} videoId={state.videoId}/>
                        <Chart data={state.data} videoId={state.videoId}/>
                        <Uncommon data={state.data} videoId={state.videoId}/>
                    </div>
                :null}
            </div>
        )
    }
}


export default Analyze;