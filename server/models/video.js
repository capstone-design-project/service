const axios = require('axios')
let db = require('../utils/rdb');
const FormData = require('form-data');

let video = {
    test: async(params) => {
        return new Promise(async (resolve, reject) => {
            let sql = `
                INSERT INTO testing (name) VALUES (?)
            `;
            let values = [params.id];
            await db.query(sql, values)
                .then((rows) => {
                    return resolve(rows);
                }).catch((err) => {
                    return reject(err);
                });
        })
    },

    analyze : async(params)=>{
        var bodyFormData = new FormData();
        bodyFormData.append('videoId', params.id)

        return new Promise(async (resolve, reject) => {
            await axios.post('http://localhost:8000/video', JSON.stringify({videoId : params.id})).then(res=>{
                return resolve(res.data);
            }).catch(err=>{
                return reject(err);
            })
        })
    }
};

module.exports = video;