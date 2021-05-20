const cookie = require('react-cookies')
const axios = require('axios')
var Cookies = require('js-cookie');
var apiHost = 'http://localhost:5000'    
const headers = { 'Content-Type': 'application/json', 'authorization': `Bearer ${Cookies.get('jwt')}`}


module.exports =  async () => {
    
    let url = apiHost + '/user/get'
    return await axios.post(url, {}, { headers: headers }).then(res => {
        return res.data.user
    })
}





