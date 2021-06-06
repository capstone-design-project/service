import React, { Component } from 'react'
import { Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Evaluate from './evaluate';
import Api from 'utils/api.js'
import getUser from 'utils/getUser'
import Cookies from 'js-cookie';
import Words from 'components/detail/words'
import 'scss/videos.scss'


class Videos extends Component { 

    constructor(props){
        super(props);
        this.state = {
            categoryOpen: false,
            difficultyOpen: false,
            inOpen : false,
            upOpen: false,
            user :null,
        }
    }

    componentDidMount = () => { 
        if (Cookies.get('jwt')) {
            getUser().then(user => { 
                this.setState({
                    user
                })
            })
        }
    }

    handleClick = (type) => {

        if (type === 'category') {
           this.setState({
                categoryOpen: !this.state.categoryOpen,
           }, () => { 
                   if (this.state.categoryOpen) { 
                       this.setState({
                           difficultyOpen: false
                       })
                   }
           })
        }

        if (type === 'difficulty') { 
            this.setState({
                difficultyOpen : !this.state.difficultyOpen
            }, () => { 
                    if (this.state.difficultyOpen) { 
                        this.setState({
                            categoryOpen: false
                        })
                    }
            })
        }
    }
    


    inClose = () => { 
        this.setState({
            inOpen : false,
        })        
    }


    upClose = () => { 
        this.setState({
            upOpen : false,
        })
    }


    saveVideo = async() => { 
        
        let vNum = this.props.video.idx;
    
        const params = {
            user: this.state.user.idx,
            video : vNum
        }
        
        await Api.sendPost('/video/save', params).then(res => {
            console.log('저장완료')
            alert('save complete')
        })

    }

    moveDetail = (video) => {
        // let saveView = async (video) => {

        //     if (Cookies.get('jwt')) {
        //         return getUser().then(async (user) => {
        //             const params = {
        //                 user: user.idx,
        //                 video: video.idx
        //             }
        //             let data = await Api.sendPost('/video/saveView', params).then(res => {
        //                 return res
        //             })
        //             return data
        //         })
        //     } else { 
        //         return false
        //     }
        // }

        // saveView(video).then(res => {
        //     window.location.href=`/detail/${video.idx}`
        // })

        window.location.href=`/detail/${video.idx}`

    }



    render() { 
        const video = this.state.video
        const tvideo = this.props.video

        return (
            <div className="detail-videos">
                <div className="left">
                    <div className="video"><iframe controls={false} src={`https://www.youtube.com/embed/${tvideo.videoId}`} ></iframe></div>
                    <div className="title">{tvideo.title}</div>
                    <div className="info">
                        <span className="cimg"><img src={tvideo.cthumbnails}/></span>
                        <span className="cname">{tvideo.channelTitle}</span>
                        <span>|</span>
                        <span className="difficulty" style={{color: "red", fontWeight :"bold"}}>{`difficulty: ${tvideo.difficulty}`}</span>
                    </div>
                    <div className="description">
                        {tvideo.edescription}
                    </div>
                    <div className="categorys">topics</div>
                    <div className="category-box">
                        {!!tvideo && tvideo.topic.map((item, index) => (
                            <div className="category" key={index}>
                                {item}
                            </div>
                        ))}
                    </div>
                    {!!this.state.user &&
                    <div className="bbox">
                        <Button className="btn" variant="contained"  onClick={() => { this.setState({ inOpen: true }) }} style={{
                            marginRight : "40px"
                        }} color="primary">Evaluate</Button>
                        <Button className="btn" variant="contained" color="primary" onClick={() => {this.saveVideo()}}>Save</Button>
                        {this.state.inOpen && <Evaluate video={tvideo} close={this.inClose}/>}

                        </div>
                    }
                </div>
                <div className="right">
                    <Words />

                    {/* <List
                        component="nav"
                        aria-labelledby="nested-list-subheader">
                        <ListItem button onClick={() => { this.handleClick('category') }}>
                            <ListItemIcon>
                            <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="same category" />
                            {this.state.categoryOpen ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={this.state.categoryOpen} timeout="auto" unmountOnExit>
                            {!!this.props.sameCategorys && this.props.sameCategorys.map((item, index) => (
                                <div className="video" key={index} onClick={() => {this.moveDetail(item)}}>
                                    <div className="thumbnail">
                                        <img src={item.thumbnails}/>
                                    </div>
                                    <div className="info">
                                        <div className="title">{item.title}</div>
                                        <div className="channel">{item.channdelName}</div>
                                        <div className="category">{`category: ${item.category}`}</div>
                                        <div className="difficulty">{`difficulty: ${item.difficulty}`}</div>
                                    </div>
                                </div>
                            ))}
                        </Collapse>
                        <ListItem button onClick={() => { this.handleClick('difficulty') }}>
                            <ListItemIcon>
                            <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="same difficulty" />
                            {this.state.difficultyOpen ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={this.state.difficultyOpen} timeout="auto" unmountOnExit>
                            {!!this.props.sameDifficultys && this.props.sameDifficultys.map((item, index) => (
                                <div className="video" key={index} onClick={() => {this.moveDetail(item)}}>
                                    <div className="thumbnail">
                                        <img src={item.thumbnails}/>
                                    </div>
                                    <div className="info">
                                        <div className="title">{item.title}</div>
                                        <div className="channel">{item.channdelName}</div>
                                        <div className="category">{`category: ${item.category}`}</div>
                                        <div className="difficulty">{`difficulty: ${item.difficulty}`}</div>
                                    </div>
                                </div>
                            ))}
                        </Collapse>
                        
                    </List> */}
                </div>
            </div>
        )
    }
}







export default Videos

