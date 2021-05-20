import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import getUser from 'utils/getUser'
import Api from 'utils/api.js'


class Save extends Component { 
    
    constructor(props) { 
        super(props);
        this.state = {
 
        }
    }

    componentDidMount = () => { 
        
        getUser().then(async(user) => { 
            const params = {
                user : user.idx
            }

            await Api.sendPost('/video/getView', params).then(res => {
                console.log(res)
                this.setState({
                    videos : res.data.data
                })
            })
        })
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
                        <Slider {...settings}>
                            {JSON.parse(item.videos).map((video, v) => (
                                <a href={`/detail/${video.idx}`} key={v}><div className="video" >
                                    <div className="vimg"><img src={video.thumbnails}/></div>
                                    <div className="title">{video.title}</div>
                                    <div className="info">
                                        <span><img src="./images/user.svg"/></span>
                                        <div>{video.channelTitle}&nbsp; |&nbsp; {`difficulty ${video.difficulty}`}</div>
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

export default Save