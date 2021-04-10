const axios = require('axios')
let db = require('../utils/rdb');

let video = {
    test: async(params) => {
        console.log(params)
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
    
    difficulty: async(params) => {
        return new Promise(async (resolve, reject) => {
            let sql = ``;
            let values = [];
            await db.query(sql, values)
                .then((rows) => {
                    return resolve(rows);
                }).catch((err) => {
                    return reject(err);
                });
        })
    },

    analyze: async(params) => {
        return new Promise(async (resolve, reject) => {
            let sql = ``;
            let values = [];
            await db.query(sql, values)
                .then((rows) => {
                    return resolve(rows);
                }).catch((err) => {
                    return reject(err);
                });
        })
    },
 

    uncommon: async(params) => {
        return new Promise(async (resolve, reject) => {
            let sql = ``;
            let values = [];
            await db.query(sql, values)
                .then((rows) => {
                    return resolve(rows);
                }).catch((err) => {
                    return reject(err);
                });
        })
    },
};

module.exports = video;