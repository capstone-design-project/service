import React, { Component } from 'react'

import Videos from 'components/detail/videos'
import Words from 'components/detail/words'

class Detail extends Component { 

    constructor(props){
        super(props);
        this.state = {
        }
    }
    
    componentDidMount = () => { 

    }

    render() { 
        return (
            <div className="detail">
                <Videos />
                <Words />
            </div>
        )
    }
}

export default Detail