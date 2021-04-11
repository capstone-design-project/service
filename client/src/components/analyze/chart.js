import React, { Component } from 'react'
import { Bar,Doughnut } from 'react-chartjs-2';

class Chart extends Component {
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
            <div className="chart">
                <div className="bar">
                    <div className="title">score</div>
                    <Bar
                    width= {600}
                    height = {400}
                    data={{
                        labels : ['avgSyllPerSec', 'avgCEFRScore', 'readability'],
                        datasets: [{
                            backgroundColor : 'rgb(51, 152, 255)',
                            stack : 1,
                            data : [analyze.avgSyllPerSec, analyze.avgCEFRScore, analyze.readability]
                        }]
                    }}
                    options= {{
                        legend : {
                            display : null
                        }}
                    }
                    />
                </div>
                <div className="doughnut">
                    <div className="title">ratio</div>
                    <Doughnut
                    width={600}
                    height = {400}
                    data={{
                        labels : ['A1ratio', 'A2ratio', 'B1ratio', 'B2ratio', 'C1ratio', 'C2ratio', 'Nratio'],
                        datasets: [{
                            backgroundColor : ['#A22BFD', '#FF426A', '#36A2EB', '#FFCD56',"#F97D6D", "#214572", "#8BBD6C"],
                            stack : 1,
                            data : [analyze.A1ratio, analyze.A2ratio, analyze.B1ratio, analyze.B2ratio, analyze.C1ratio , analyze.C2ratio, analyze.Nratio]
                        }]
                    }}
                    options = {{
                        legend : {
                            position : "right"
                        }
                    }}
                    />
                </div>
            </div>
        )
    }
}


export default Chart