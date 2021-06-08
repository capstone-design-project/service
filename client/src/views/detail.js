import React, { Component } from 'react'

import Videos from 'components/detail/videos'
import Words from 'components/detail/words'
import SameVideos from 'components/detail/sameVideos'

import Api from 'utils/api.js'
import getUser from 'utils/getUser'
import Cookies from 'js-cookie';
class Detail extends Component { 

    constructor(props){
        super(props);
        this.state = {
            video: null,
            sameCategorys: null,
            sameDifficultys : null
        }
    }
    
    componentDidMount = () => {
        this.getInfo();
    }

    getInfo = async() => { 
        let vNum = window.location.href.split('/')[4]

        const params = { 
             video: vNum 
        }


        if (Cookies.get('jwt')) {
            getUser.get().then(async (user) => {
                await Api.sendPost('/video/saveView', {
                    user: user.idx,
                    video: vNum
                })
            })
        }
    
        await Api.sendPost('/video/detail', params).then(res => {
            this.setState({
                video : res.data.data
            })
        })

        await Api.sendPost('/video/sameCategory', params).then(res => {
            this.setState({
                sameCategorys : res.data.data
            })
        })

        await Api.sendPost('/video/sameDifficulty', params).then(res => {
            this.setState({
                sameDifficultys : res.data.data
            })
        })
    }

    render() { 
        return (
            <div className="detail">
                {(!!this.state.video && !!this.state.sameCategorys && !!this.state.sameDifficultys) &&
                    <div>
                        <Videos video={this.state.video} sameCategorys={this.state.sameCategorys} sameDifficultys={this.state.sameDifficultys}/>
                        {/* <Words /> */}
                        <SameVideos video={this.state.video} sameCategorys={this.state.sameCategorys} sameDifficultys={this.state.sameDifficultys}/>
                    </div>
                }
            </div>
        )
    }
}

export default Detail