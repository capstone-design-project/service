import React, { Component, Fragment } from 'react'
import Api from 'utils/api.js'
import { Bar,Doughnut } from 'react-chartjs-2';
import translate from 'utils/translate'

import 'scss/words.scss'

import {
    FormLabel,
    FormControlLabel,
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableCell
} from '@material-ui/core'
import { ToggleButtonGroup , ToggleButton, Pagination} from '@material-ui/lab';


class Words extends Component { 

    constructor(props){
        super(props);
        this.state = {
            type: 'easy',
            words: null,

            tog: 'analyze',
            translated : [],
            page: {
                set: 1,
                per: 10,
                total: 115
            },
            listData: [],
            analyze : null,
        }

        this.handleChange = this.handleChange.bind()
    }

    setType = (type) => { 
        this.setState({
            type
        }, () => { 
            this.getWords()
        })
    }
    

    setSelect = (type) => { 
        this.setState({
            tog : type
        }, () => {
            if (type === 'vocabulary') { 
                this.getWords()
            }
        })
    }

    componentDidMount = () => { 
        this.getRatio();
    }

    getWords = async() => { 
        let vNum = window.location.href.split('/')[4]
        let type = this.state.type
        if (type === 'easy') {
            type = 'easyWordList'
        } else if (type === 'middle') { 
            type = 'middleWordList'
        }else if (type === 'hard') { 
            type = 'hardWordList'
        }else if (type === 'unranked') { 
            type = 'unrankedWordList'
        }else if (type === 'unique') { 
            type = 'uniqueList'
        }else if (type === 'uncommon') { 
            type = 'uncommonList'
        }
        
        await Api.sendPost('/video/words', {
            videoIdx: vNum,
            type
        }).then(res => {
            
            this.setState({
                words: res.data.data,
                page: {
                    ...this.state.page,
                    total : res.data.data.length
                }
            }, () => {this.handleChange(0,1)})
            
        })
    }

    getRatio = async() => { 
        let vNum = window.location.href.split('/')[4]

        await Api.sendPost('/video/ratio', {
            videoIdx: vNum,
        }).then(res => { 
            console.log(res.data.data)
            this.setState({
                analyze : res.data.data
            })
        })
    }

    handleChange = (e, v) => { 
        this.setState({
            page: {
                ...this.state.page,
                set : v
            }
        }, () => {
                let per = this.state.page.per;
                let set = this.state.page.set;
                let total = this.state.page.total;

                let start = (set - 1) * per + 1;
                let end = start + per - 1;
                if (end > total) end = total;


                const loop = async (item) => {
                    const promises = item.map(async (word) => {
                        return await translate.wordTranslate(word).then((info) => info)
                    })
                    const results = await Promise.all(promises)
                    return results;
                }


                let target = this.state.words.slice(start, end + 1)
                loop(target).then(res => {
                    // { en: 'enlish', ko: '??????' }
                    let listData = [];
                    target.forEach((word, index) => { 
                        let temp = {};
                        temp.en = word;
                        if (res[index].length >= 2) {
                            temp.ko = res[index].slice(0, 2).join(', ')
                        } else { 
                            temp.ko = res[index][0];
                        }
                        listData.push(temp)
                    })

                    this.setState({
                        listData
                    })
                })
        })
    }



    makeAnimation =() => {
        let analyze = this.state.analyze;
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

    render() {

        const tableHead = ['word', 'meaning']

        return (    
            <div className="detail-words">
                
                <FormControlLabel
                    control={ 
                        <ToggleButtonGroup value={this.state.tog} color="primary">
                            <ToggleButton value="analyze" onClick={() => { this.setSelect('analyze') }} style={{ width: "250px" }}>analyze result</ToggleButton>
                            <ToggleButton value="vocabulary" onClick={() => { this.setSelect('vocabulary') }} style={{ width: "250px" }}>Vocabulary</ToggleButton>
                        </ToggleButtonGroup>
                    }
                />
           
                

                {!!this.state.tog ?
                    <div>
                        {
                            this.state.tog === 'analyze' ?
                                this.state.analyze &&
                                <div className="analyzechart">
                                    <div style={{ textAlign: "center", position: "relative", right: "50px", marginTop: "30px", fontSize: "17px" }}><span>Difficulty of this video is &nbsp;</span><span style={{color:"red", fontSize:"25px"}}>{this.state.analyze.difficulty===0?'easy':this.state.analyze.difficulty===1?'normal':'hard'}</span></div>
                                    <div className="total">
                                        <div className="item">
                                            <div className="title">totalWords</div>
                                            <div className="data">{this.state.analyze.totalWords}</div>
                                        </div>
                                        <div className="item">
                                            <div className="title">totalUniqueWords</div>
                                            <div className="data">{this.state.analyze.totalUniqueWords}</div>
                                        </div>
                                        <div className="item">
                                            <div className="title">totalSentences</div>
                                            <div className="data">{this.state.analyze.totalSentences}</div>
                                        </div>
                                    </div>
                                    <div className="total">
                                        <div className="item">
                                            <div className="title">avgSyllPerSec</div>
                                            <div className="data">{this.state.analyze.avgSyllPerSec.toFixed(1)}</div>
                                        </div>
                                        <div className="item">
                                            <div className="title">avgSentenceLength</div>
                                            <div className="data">{this.state.analyze.avgSentenceLength.toFixed(1)}</div>
                                        </div>
                                        <div className="item">
                                            <div className="title">readability</div>
                                            <div className="data">{this.state.analyze.readability.toFixed(1)}</div>
                                        </div>
                                    </div>
                                    <div className="bar" >
                                        <div className="title">score</div>
                                        <Bar
                                        width= {300}
                                        height={60}
                                        data={{
                                            labels : ['avgCEFRScore', 'avgWordCEFR', 'avgFreqCEFR'],
                                            datasets: [{
                                                backgroundColor : 'rgb(51, 152, 255)',
                                                stack : 1,
                                                data : [this.state.analyze.avgCEFRScore, this.state.analyze.avgWordCEFR,this.state.analyze.avgFreqCEFR]
                                            }]
                                        }}
                                        options= {{
                                            legend : {
                                                display : null
                                            },
                                            scales: {
                                                xAxes: [{
                                                    barThickness : 30
                                                }]
                                            }
                                            }
                                        }
                                        />
                                    </div>
                                    <div className="doughnut" style={{marginTop: "40px"}}>
                                        <div className="title">ratio</div>
                                        <Doughnut
                                        style={{display:"relative", left: "50px"}}
                                        width={200}
                                        height = {40}
                                        data={{
                                            labels : ['totalEasyRatio', 'totalMiddleRatio', 'totalHardRatio'],
                                            datasets: [{
                                                backgroundColor : ['#A22BFD', '#FF426A', '#36A2EB', '#FFCD56',"#F97D6D", "#214572", "#8BBD6C"],
                                                stack : 1,
                                                data : [this.state.analyze.totalEasyRatio ,this.state.analyze.totalMiddleRatio ,this.state.analyze.totalHardRatio]
                                            }]
                                        }}
                                        options = {{
                                            legend : {
                                                position : "bottom"
                                            }
                                        }}
                                        />
                                    </div>
                                    <div className="doughnut" style={{marginTop: "45px"}}>
                                        <Doughnut
                                        style={{display:"relative", left: "50px"}}
                                        width={200}
                                        height = {40}
                                        data={{
                                            labels : ['wordEasyRatio', 'wordMiddleRatio', 'wordHardRatio'],
                                            datasets: [{
                                                backgroundColor : ['#A22BFD', '#FF426A', '#36A2EB', '#FFCD56',"#F97D6D", "#214572", "#8BBD6C"],
                                                stack : 1,
                                                data : [this.state.analyze.wordEasyRatio ,this.state.analyze.wordMiddleRatio ,this.state.analyze.wordHardRatio]
                                            }]
                                        }}
                                        options = {{
                                            legend : {
                                                position : "bottom"
                                            }
                                        }}
                                        />
                                    </div>
                                    <div className="doughnut" style={{marginTop: "45px"}}>
                                        <Doughnut
                                        style={{display:"relative", left: "50px"}}
                                        width={200}
                                        height = {40}
                                        data={{
                                            labels : ['FreqEasyRatio', 'FreqMiddleRatio', 'FreqHardRatio'],
                                            datasets: [{
                                                backgroundColor : ['#A22BFD', '#FF426A', '#36A2EB', '#FFCD56',"#F97D6D", "#214572", "#8BBD6C"],
                                                stack : 1,
                                                data : [this.state.analyze.FreqEasyRatio ,this.state.analyze.FreqMiddleRatio ,this.state.analyze.FreqHardRatio]
                                            }]
                                        }}
                                        options = {{
                                            legend : {
                                                position : "bottom"
                                            }
                                        }}
                                        />
                                    </div>
                                </div>
                                :
                                <div>
                                    <div>
                                        <div className="select">
                                        {/* <FormLabel component="legend">difficulty</FormLabel> */}
                                        <FormControlLabel
                                            style={{position:"relative", top: "30px"}}
                                            control={ 
                                                <ToggleButtonGroup value={this.state.type} color="primary">
                                                    <ToggleButton value="easy" onClick={() => {this.setType('easy')}} style={{width: "100px" }}>easy</ToggleButton>
                                                </ToggleButtonGroup>
                                            }
                                        />
                                            <FormControlLabel
                                            style={{position:"relative", top: "30px"}}
                                            control={ 
                                                <ToggleButtonGroup value={this.state.type}>
                                                    <ToggleButton value="middle" onClick={() => {this.setType('middle')}} style={{width: "100px"}}> middle</ToggleButton>
                                                </ToggleButtonGroup>
                                            }
                                        />
                                            <FormControlLabel
                                            style={{position:"relative", top: "30px"}}
                                            control={ 
                                                <ToggleButtonGroup value={this.state.type}>
                                                    <ToggleButton value="hard" onClick={() => {this.setType('hard')}} style={{width: "100px"}}>hard</ToggleButton>
                                                </ToggleButtonGroup>
                                            }
                                        />
                                            <FormControlLabel
                                            style={{position:"relative", top: "30px"}}
                                            control={ 
                                                <ToggleButtonGroup value={this.state.type}>
                                                    <ToggleButton value="unranked" onClick={() => {this.setType('unranked')}} style={{width: "100px"}}>unranked</ToggleButton>
                                                </ToggleButtonGroup>
                                            }
                                        />
                                        {/* <FormLabel component="legend">unique</FormLabel> */}
                                        <FormControlLabel
                                            style={{position:"relative", top: "30px"}}
                                            control={ 
                                                <ToggleButtonGroup value={this.state.type}>
                                                    <ToggleButton value="unique" onClick={() => {this.setType('unique')}} style={{width: "100px"}}>unique</ToggleButton>
                                                </ToggleButtonGroup>
                                            }
                                        />
                                        {/* <FormLabel component="legend">uncommon</FormLabel> */}
                                        <FormControlLabel
                                            style={{position:"relative", top: "30px"}}
                                            control={ 
                                                <ToggleButtonGroup value={this.state.type}>
                                                    <ToggleButton value="uncommon" onClick={() => { this.setType('uncommon') }} style={{ width: "100px" }} >uncommon</ToggleButton>
                                                </ToggleButtonGroup>
                                            }
                                        />
                                        {/* <FormLabel component="legend">all</FormLabel> */}
                                        {/* <FormControlLabel
                                            style={{position:"relative", top: "30px", marginRight: "70px"}}
                                            control={ 
                                                <ToggleButtonGroup value={this.state.type}>
                                                    <ToggleButton value="all" onClick={() => {this.setType('all')}}>all</ToggleButton>
                                                </ToggleButtonGroup>
                                            }
                                        /> */}
                                    </div>
                                    <div>
                                        <div style={{marginTop: "60px", marginBottom:"10px"}}>
                                            <strong>total : {this.state.page.total}</strong>
                                        </div>
                                        <Table style={{marginBottom: "30px"}}>
                                            <TableHead>
                                                <TableRow>
                                                    {tableHead.map((item, key) => { 
                                                        return (
                                                            <TableCell key={key} variant="outlined">{item}</TableCell>
                                                        )
                                                    })}
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                            {!!this.state.listData && this.state.listData.map((item, key) => (
                                                <Fragment key={key}>
                                                    <TableRow key={key}>
                                                        <TableCell className="pointer">{item.en}</TableCell>
                                                        <TableCell className="pointer">{item.ko}</TableCell>
                                                    </TableRow>
                                                </Fragment>
                                            ))}
                                            </TableBody>
                                        </Table>
                                    </div>
                                    <div className="paging">
                                        <Pagination count={Math.ceil(this.state.page.total/this.state.page.per)} color="primary" variant="outlined" shape="rounded" onChange={this.handleChange}/>
                                    </div>
                                </div>
                                </div>
                        }
                    </div>
                    :
                    null   
                }
            </div>
        )
    }
}

export default Words