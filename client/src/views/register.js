import React, { Component } from 'react'
import Api from 'utils/api.js'

class Register extends Component { 

    componentDidMount = () => { 

    }

    info = async() => {
        let params = {
        }
        await Api.sendPost('/video/register', params).then(res => {
            console.log('완료')
        })
    }

    
    dinfo = async() => {
        let params = {
        }

        await Api.sendPost('/video/dregister', params).then(res => {
            console.log('완료')
        })
    }



    render() { 
        return (
            <div>
                <button onClick={()=>this.info()}>video_info</button>
                <button onClick={()=>this.dinfo()}>train_data</button>
            </div>
        )
    }

}


export default Register