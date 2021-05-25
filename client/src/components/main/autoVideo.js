import React, { Component } from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {Button} from '@material-ui/core';
import $ from "jquery";
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory';
import 'scss/autoVideo.scss'
import Api from 'utils/api.js'
import getUser from 'utils/getUser'
import Cookies from 'js-cookie';
class AutoVideo extends Component {
    
    
    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount = () => {
        this.startAuto();
    }

    startAuto = () => { 
        var pos = 0;
        var totalSlides = $('#slider-wrap ul li').length;

        var sliderWidth = $('#slider-wrap').width();

        $(document).ready(function(){
        
        $('#slider-wrap ul#slider').width(sliderWidth*totalSlides);
        
        $('#next').click(function(){
            slideRight();
        });
        
        $('#previous').click(function(){
            slideLeft();
        });
        
        var autoSlider = setInterval(slideRight, 3000);
        
        $.each($('#slider-wrap ul li'), function() { 

            var li = document.createElement('li');
            $('#pagination-wrap ul').append(li);    
        });
        
        countSlides();
        
        pagination();
        
        $('#slider-wrap').hover(
            function(){ $(this).addClass('active'); clearInterval(autoSlider); }, 
            function(){ $(this).removeClass('active'); autoSlider = setInterval(slideRight, 3000); }
        );
        
        

        });
        
        function slideLeft(){
        pos--;
        if(pos==-1){ pos = totalSlides-1; }
        $('#slider-wrap ul#slider').css('left', -(sliderWidth*pos));  
        
        countSlides();
        pagination();
        }

        function slideRight(){
        pos++;
        if(pos==totalSlides){ pos = 0; }
        $('#slider-wrap ul#slider').css('left', -(sliderWidth*pos)); 
        
        countSlides();
        pagination();
        }

        function countSlides(){
        $('#counter').html(pos+1 + ' / ' + totalSlides);
        }

        function pagination(){
        $('#pagination-wrap ul li').removeClass('active');
        $('#pagination-wrap ul li:eq('+pos+')').addClass('active');
        }
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
        
        return (
            <div className="autoVideo">
                <div id="wrapper">
                    <div id="slider-wrap">
                        <ul id="slider">
                        {!!this.props.videos && this.props.videos.map((item, index) => (
                             <li>
                                <div className="info">
                                    <div className="title">{item.title}</div>
                                    <div className="difficulty">{`difficulty - ${item.difficulty}`}</div>
                                    <Button className="btn watch" variant="contained" color="primary" onClick={() => {this.moveDetail(item)}}><ChangeHistoryIcon className="showbtn"/>watch now</Button>
                                </div>
                                <img src={item.thumbnails}/>
                             </li>
                        ))}
                        </ul>
                        <ArrowForwardIosIcon className="btns" id="next"/>
                        <ArrowBackIosIcon className="btns" id="previous"/>
                        <div id="counter"></div>
                        <div id="pagination-wrap">
                            <ul>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AutoVideo