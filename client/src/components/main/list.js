import { Slide } from '@material-ui/core';
import { Category, CenterFocusStrong, ThreeSixty } from '@material-ui/icons';
import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import 'scss/mainList.scss'



class List extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    category: "category1", videos: [
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl2", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl3", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl4", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl5", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl6", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                    ]
                },
                {
                    category: "category1", videos: [
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                    ]
                },
                {
                    category: "category1", videos: [
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                        {title:"test titl1", description: "this is test description1", thumbnail : "./images/2.jpg", channelImg: "./images/user.svg",  videoUrl: "test", channdelName: "channel!", description : 'this is description' , difficulty: '3.1'},
                    ]
                },
            ]
        }
    }

    render() {
        const settings = {
            className: "center",
            centerMode: false,
            infinite: true,
            centerPadding: "0px",
            slidesToShow: 2,
            speed: 500,
            rows: 2,
            slidesPerRow: 2,
            slidesToScroll: 2
          };
        return (
            <div className="mainList">
                {!!this.state.data && this.state.data.map((item, index) => (
                    <div className="container" key="index">
                        <h1>{item.category}</h1>
                        <Slider {...settings}>
                            {item.videos.map((video, v) => (
                                <a href="/detail"><div className="video" key={v}>
                                    <div className="vimg"><img src={video.thumbnail}/></div>
                                    <div className="title">{v}</div>
                                    <div className="info">
                                        <span><img src={video.channelImg} /></span>
                                        <div>{video.channdelName}&nbsp; |&nbsp; {`difficulty ${video.difficulty}`}</div>
                                    </div>
                                </div></a>
                            ))}
                        </Slider>
                    </div>
                ))}
            </div>
        );
      }
}


export default List