const axios = require('axios')
var Cookies = require('js-cookie');
var apiHost = 'http://localhost:5000'
var aws_apHost = 'http://13.209.97.17:5000'

module.exports = {
    sendPost(url, params) {

        let headers = {
            'Content-Type': 'application/json',
        }

        let token = Cookies.get('jwt')
        if (!!token) {
            headers['x-access-token'] = token;
        }

        url = apiHost + url
        return axios.post(url, JSON.stringify(params), { headers: headers })
            .then(res => {
                return res;
            })
    },
}
