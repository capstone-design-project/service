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
import 'scss/videos.scss'
import Evaluate from './evaluate';


class Videos extends Component { 

    constructor(props){
        super(props);
        this.state = {
            video:{title:"test titl1", description: "this is test description1 this is test description1 this is test description1 this is test description1 this is test description1 this is test description1 this is test description1 this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", difficulty: '3.1', categorys: ['category1', 'catego2', 'category33333']},

            categorys: [
                {title:"또...? impossible to book Sushi Restaurant in Seoul또...? impossible to book Sushi Restaurant in Seou", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                {title:"test titl2", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                {title:"test titl3", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                {title:"test titl4", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                {title:"test titl5", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                {title:"test titl6", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
            ],
            difficultys:  [
                {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                {title:"test titl2", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                {title:"test titl3", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                {title:"test titl4", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                {title:"test titl5", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                {title:"test titl6", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
            ],
            categoryOpen: false,
            difficultyOpen: false,
            inOpen : false,
            upOpen : false,
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



    render() { 
        const video = this.state.video

        return (
            <div className="detail-videos">
                <div className="left">
                    <div className="video"><img src={video.thumbnail} /></div>
                    <div className="title">{video.title}</div>
                    <div className="info">
                        <span className="cimg"><img src={video.channelImg} /></span>
                        <span className="cname">{video.channdelName}</span>
                        <span>|</span>
                        <span className="difficulty">{`difficulty: ${video.difficulty}`}</span>
                    </div>
                    <div className="description">
                        {video.description}
                    </div>
                    <div className="categorys">categorys</div>
                    <div className="category-box">
                        {!!video && video.categorys.map((item, index) => (
                            <div className="category" key={index}>
                                {item}
                            </div>
                        ))}
                    </div>
                    <div className="bbox">
                        <Button className="btn" variant="contained"  onClick={() => { this.setState({ inOpen: true }) }} style={{
                            marginRight : "40px"
                        }} color="primary">Evaluate</Button>
                        <Button className="btn" variant="contained" color="primary">Save</Button>
                        {this.state.inOpen && <Evaluate close={this.inClose}/>}

                    </div>
                </div>
                <div className="right">
                    <List
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
                            {!!this.state.categorys && this.state.categorys.map((item, index) => (
                                <div className="video" key={index}>
                                    <div className="thumbnail">
                                        <img src={item.thumbnail}/>
                                    </div>
                                    <div className="info">
                                        <div className="title">{item.title}</div>
                                        <div className="channel">{item.channdelName}</div>
                                        <div className="difficulty">{`difficulty: ${video.difficulty}`}</div>
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
                            {!!this.state.difficultys && this.state.difficultys.map((item, index) => (
                                <div className="video" key={index}>
                                    <div className="thumbnail">
                                        <img src={item.thumbnail}/>
                                    </div>
                                    <div className="info">
                                        <div className="title">{item.title}</div>
                                        <div className="channel">{item.channdelName}</div>
                                        <div className="difficulty">{`difficulty: ${video.difficulty}`}</div>
                                    </div>
                                </div>
                            ))}
                        </Collapse>
                    </List>
                </div>
            </div>
        )
    }
}







export default Videos

