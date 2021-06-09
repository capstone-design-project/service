const cookie = require('react-cookies')
const axios = require('axios')
var Cookies = require('js-cookie');
var apiHost = 'http://13.125.216.121:5000'

var aws_apHost = 'http://13.209.97.17:5000'



module.exports = {
    get() {  
        const headers = { 'Content-Type': 'application/json', 'authorization': `Bearer ${Cookies.get('jwt')}`}
        let url = apiHost + '/user/get'
        return axios.post(url, {}, { headers: headers }).then(res => {
            return res.data.user
        })
    }   
}


