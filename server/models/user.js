const sha512 = require('../utils/sha512')
let db = require('../utils/rdb');
const key = 'capstone'

let user = {
    signup: async(params) => {
        return new Promise(async (resolve, reject) => {
            let sql = `
            INSERT INTO users (email, name, password) VALUES (?, ?, ?)
            `;
            
            let values = [params.email, params.name, sha512(params.password, key)];
            await db.query(sql, values)
                .then((rows) => {
                    return resolve(rows);
                }).catch((err) => {
                    return reject(err);
                });
        })
    },

    isEmail: async(params) => {
        return new Promise(async (resolve, reject) => {
            let sql = `
            SELECT * FROM users WHERE email=?
            `;
            
            let values = [params.email];
            await db.query(sql, values)
                .then((rows) => {
                    return resolve(rows);
                }).catch((err) => {
                    return reject(err);
                });
        })
    },

    signin: async(params) => {
        return new Promise(async (resolve, reject) => {
            let sql = `
            SELECT * FROM users WHERE email=? AND password=?
            `;
            
            let values = [params.email , sha512(params.password, key)];
            await db.query(sql, values)
                .then((rows) => {
                    return resolve(rows);
                }).catch((err) => {
                    return reject(err);
                });
        })
    },


    get: async(idx) => {
        return new Promise(async (resolve, reject) => {
            let sql = `
            SELECT * FROM users WHERE idx=?
            `;
            
            let values = [idx];
            await db.query(sql, values)
                .then((rows) => {
                    return resolve(rows);
                }).catch((err) => {
                    return reject(err);
                });
        })
    },    
};

module.exports = user;