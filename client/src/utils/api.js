const axios = require('axios')
var Cookies = require('js-cookie');
var apiHost = 'http://localhost:5000'

module.exports = {
    sendPost(url, params) {

        let headers = {
            'Content-Type': 'application/json',
        }

        let token = Cookies.get('adminToken')
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
