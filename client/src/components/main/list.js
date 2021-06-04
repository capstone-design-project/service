import { Slide } from '@material-ui/core';
import { Category, CenterFocusStrong, ThreeSixty } from '@material-ui/icons';
import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Api from 'utils/api.js'
import Cookies from 'js-cookie';

import 'scss/mainList.scss'
import getUser from 'utils/getUser'



class List extends Component {
    


    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    componentDidMount = () => {
        console.log(this.props.videos)
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

    makeSetting = (num) => { 
        switch (num) {
            case 1:
                return {
                    autoplay: false,
                    autoplaySpeed: 5000,
                    pauseOnFocus: true,
                    pauseOnHover: true,
                    dots: false,
                    arrows: false,
                    infinite: false,
                    speed: 500,
                    slidesToScroll: 1,
                    swipeToSlide: true,
                    variableWidth: true,
                };
                break;
            default:
                return {
                    className: "center",
                    centerMode: false,
                    infinite: true,
                    centerPadding: "0px",
                    slidesToShow: 2,
                    speed: 500,
                    rows: 2,
                    slidesPerRow: 2,
                    slidesToScroll: 2,
                };
                break;
        }
    }
    
    render() {
        let videos = this.props.videos

        return (
            <div className="mainList">
                {!!this.props.videos && this.props.videos.map((item, index) => (
                    <div className="container" key={index}>
                        <h1>{item.category}</h1>
                        <Slider {...this.makeSetting(item.videos.length)}>
                            {item.videos.map((video, v) => (
                                <div className={`c${item.videos.length}`} className="video" key={v} onClick={() => {this.moveDetail(video)}}>
                                    <div className="vimg"><img src={video.thumbnails}/></div>
                                    <div className="title">{video.title}</div>
                                    <div className="info">
                                        <span><img src="./images/user.svg"/></span>
                                        <div>{video.channelTitle}&nbsp; |&nbsp; {`difficulty ${video.difficulty}`}</div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                ))}
            </div>
        );
      }
}


export default List