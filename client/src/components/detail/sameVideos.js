import react, { Component } from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'scss/show.scss'


class SameVideos extends Component { 
    constructor(props) { 
        super(props);

        this.state = {

        }
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
        return (
            <div className="show-list mainList">
                <div className="container">
                    <h1>same category</h1>
                    {
                        <Slider {...this.makeSetting(this.props.sameCategorys.length)}>
                            {this.props.sameCategorys.map((video, v) => (
                                <a className={`c${this.props.sameCategorys.length}`} href={`/detail/${video.idx}`} key={v}><div className="video" >
                                    <div className="vimg"><img src={video.thumbnails}/></div>
                                    <div className="title">{video.title}</div>
                                    <div className="info">
                                        <span><img src={video.cthumbnails}/></span>
                                        <div>{video.channelTitle}&nbsp; |&nbsp; <span style={{fontWeight:"bold", color: "black"}}>{`difficulty ${video.difficulty}`}</span></div>
                                    </div>
                                </div></a>
                            ))}
                        </Slider>
                    }
                </div>
                <div className="container">
                    <h1>same difficulty</h1>
                    {
                        <Slider {...this.makeSetting(this.props.sameDifficultys.length)}>
                            {this.props.sameDifficultys.map((video, v) => (
                                <a className={`c${this.props.sameDifficultys.length}`} href={`/detail/${video.idx}`} key={v}><div className="video" >
                                    <div className="vimg"><img src={video.thumbnails}/></div>
                                    <div className="title">{video.title}</div>
                                    <div className="info">
                                        <span><img src={video.cthumbnails}/></span>
                                        <div>{video.channelTitle}&nbsp; |&nbsp; <span style={{fontWeight:"bold", color: "black"}}>{`difficulty ${video.difficulty}`}</span></div>
                                    </div>
                                </div></a>
                            ))}
                        </Slider>
                    }
                    </div>
            </div>
        )
    }
}

export default SameVideos