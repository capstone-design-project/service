import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import getUser from 'utils/getUser'
import Api from 'utils/api.js'
import 'scss/show.scss'


class Save extends Component { 
    
    constructor(props) { 
        super(props);
        this.state = {
 
        }
    }

    componentDidMount = () => { 
        
        getUser.get().then(async(user) => { 
            const params = {
                user : user.idx
            }

            await Api.sendPost('/video/getSave', params).then(res => {
                console.log(res)
                this.setState({
                    videos : res.data.data
                })
            })
        })
    }

    makeSetting = (num) => { 
        switch (num) {
            case 1:
                return {
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1
                };
                break;
            case 2:
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
            case 3:
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
                    infinite: true,
                    speed: 500,
                    slidesToShow: 4,
                    slidesToScroll: 4
                };
                break;
        }
    }

    render() {
        const settings = {
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            speed: 500,
          };
        return (
            <div className="show-list mainList">
                {!!this.state.videos && this.state.videos.map((item, index) => (
                    <div className="container" key="index">
                        <h1>{item.date}</h1>
                        {
                            <Slider {...this.makeSetting(JSON.parse(item.videos).length)}>
                                {JSON.parse(item.videos).map((video, v) => (
                                    <a className={`c${JSON.parse(item.videos).length}`} href={`/detail/${video.idx}`} key={v}><div className="video" >
                                        <div className="vimg"><img src={video.thumbnails}/></div>
                                        <div className="title">{video.title}</div>
                                        <div className="info">
                                            <span><img src={video.cthumbnails}/></span>
                                            <div>{video.channelTitle}&nbsp; |&nbsp; <span style={{fontWeight:"bold", color: "black"}}>{`difficulty: ${video.difficulty===0?'easy':video.difficulty===1?'normal':'hard'}`}</span></div>
                                        </div>
                                    </div></a>
                                ))}
                            </Slider>
                         }
                    </div>
                ))}
            </div>
        );
    }
}

export default Save