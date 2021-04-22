const axios = require('axios')
let db = require('../utils/rdb');

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

        

        return new Promise(async (resolve, reject) => {
            await axios.post('http://localhost:8000/video', JSON.stringify({videoId : params.id.split('?')[1].slice(2)})).then(res=>{
                return resolve(res.data);
            }).catch(err=>{
                return reject(err);
            })
        })
    }
};

module.exports = video;