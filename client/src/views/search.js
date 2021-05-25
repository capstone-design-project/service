import React, { Component } from 'react'
import Api from 'utils/api.js'
import queryString from 'query-string'
import { ToggleButtonGroup, ToggleButton, Pagination } from '@material-ui/lab';
import 'scss/searchResult.scss'

class Search extends Component { 
  
    constructor(props) { 
        super(props)
        this.state = {
            page: {
                set: 1,
                per: 12,
                total: 0,
            },
            listData : [],
            videos : []
        }
        this.handleChange = this.handleChange.bind()
    }

    componentDidMount = () => {
        this.getData();
    }


    getData = async () => {
        let getdata = async (videoId) => {

            await this.setState({loading : true})

            const parsed = queryString.parse(this.props.location.search);
            let data =  await Api.sendPost('/video/search', {
                search: parsed.content
            }).then(res => {
                return res
            })
            return data
        }

        getdata().then(res=>{
            this.setState({
                videos: res.data.data,
                page: {
                    ...this.state.page,
                    total: res.data.total,
                },
                loading: false,
            }, () => {this.handleChange(0,1)})
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

                let listData = this.state.videos.slice(start, end + 1);
                this.setState({
                    listData
                })
        })    
    }


    render() { 
        return (
            <div className="video-search">
                {this.state.loading ?
                    <div className="loading">
                        Loading ...
                    </div>
                    : null
                }
                {!!this.state.videos &&
                    <div>
                        <div className="total">
                        <h2 className="result"><span>search result of</span>&nbsp;<span style={{color: "blue"}}>{` ' ${queryString.parse(this.props.location.search).content} ' `}</span></h2>
                        <div className="cnt">{`total : ${this.state.page.total}`}</div>
                        </div>
                        <div>
                            <div className="wapper">
                                {!!this.state.listData && this.state.listData.map((item, index) => (
                                    <div className="video" key={index}>
                                        <div className="vimg"><img src={item.thumbnails}/></div>
                                        <div className="title">{item.title}</div>
                                        <div className="info">
                                            <span><img src="./images/user.svg"/></span>
                                            <div>{item.channelTitle}&nbsp; |&nbsp; {`difficulty ${item.difficulty}`}</div>
                                        </div>
                                    </div>
                                ))}  
                            </div>
                            <div className="paging">
                                <Pagination count={Math.ceil(this.state.page.total/this.state.page.per)} color="primary" variant="outlined" shape="rounded" onChange={this.handleChange}/>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Search