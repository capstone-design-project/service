import React, { Component, Fragment } from 'react'

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
            type: 'all',
            words: null,
            translated: [{ en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }, { en: 'enlish', ko: '한글' }],
            page: {
                set: 1,
                per: 10,
                total: 115
            },
            listData: []

        }

        this.handleChange = this.handleChange.bind()
    }

    setType = (type) => { 
        this.setState({type})
    }
    
    componentDidMount = () => { 
        this.handleChange(0,1)
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

                let listData = this.state.translated.slice(start, end + 1);

                this.setState({
                    listData
                })
                
        })
        
    }


    render() {

        const tableHead = ['word', 'meaning']

        return (    
            <div className="detail-words">
                <div className="title">Vocabulary</div>
                <div className="select">
                    <FormLabel component="legend">difficulty</FormLabel>
                    <FormControlLabel
                        style={{position:"relative", top: "30px", marginRight: "70px"}}
                        control={ 
                            <ToggleButtonGroup value={this.state.type} color="primary">
                                <ToggleButton value="easy" onClick={() => {this.setType('easy')}} style={{width: "120px"}}>easy</ToggleButton>
                                <ToggleButton value="middle" onClick={() => {this.setType('middle')}} style={{width: "120px"}}> middle</ToggleButton>
                                <ToggleButton value="hard" onClick={() => {this.setType('hard')}} style={{width: "120px"}}>hard</ToggleButton>
                                <ToggleButton value="unranked" onClick={() => {this.setType('unranked')}} style={{width: "120px"}}>unranked</ToggleButton>
                            </ToggleButtonGroup>
                        }
                    />
                    <FormLabel component="legend">unique</FormLabel>
                    <FormControlLabel
                        style={{position:"relative", top: "30px", marginRight: "70px"}}
                        control={ 
                            <ToggleButtonGroup value={this.state.type}>
                                <ToggleButton value="unique" onClick={() => {this.setType('unique')}} style={{width: "120px"}}>unique</ToggleButton>
                            </ToggleButtonGroup>
                        }
                    />
                    <FormLabel component="legend">uncommon</FormLabel>
                    <FormControlLabel
                        style={{position:"relative", top: "30px", marginRight: "70px"}}
                        control={ 
                            <ToggleButtonGroup value={this.state.type}>
                                <ToggleButton value="uncommon" onClick={() => {this.setType('uncommon')}} >uncommon</ToggleButton>
                            </ToggleButtonGroup>
                        }
                    />
                    <FormLabel component="legend">all</FormLabel>
                    <FormControlLabel
                        style={{position:"relative", top: "30px", marginRight: "70px"}}
                        control={ 
                            <ToggleButtonGroup value={this.state.type}>
                                <ToggleButton value="all" onClick={() => {this.setType('all')}}>all</ToggleButton>
                            </ToggleButtonGroup>
                        }
                    />
                </div>
                <div>
                    <div style={{marginTop: "80px", marginBottom:"10px"}}>
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
        )
    }
}

export default Words