const axios = require('axios')
let db = require('../utils/rdb');

let video = {
    // test: async(params) => {
    //     return new Promise(async (resolve, reject) => {
    //         let sql = `
    //             INSERT INTO testing (name) VALUES (?)
    //         `;
    //         let values = [params.id];
    //         await db.query(sql, values)
    //             .then((rows) => {
    //                 return resolve(rows);
    //             }).catch((err) => {
    //                 return reject(err);
    //             });
    //     })
    // },

    analyze: async (params) => {
        console.log(params)
        return new Promise(async (resolve, reject) => {
            await axios.post('http://localhost:8000/video', JSON.stringify({videoId : params.id.split('?')[1].slice(2)})).then(res=>{
                return resolve(res.data);
            }).catch(err=>{
                return reject(err);
            })
        })
    },


    register: async (video) => {
        return new Promise(async (resolve, reject) => {
            let sql = `
                INSERT INTO videos (videoId, publishedDate, channelId, channelTitle,title, description ,thumbnails ,category, topic) VALUES (?,?,?,?,?,?,?,?,?)
            `;
            let values = [video.videoId, video.publishedDate, video.channelId, video.channelTitle, video.title, video.description, video.thumbnails, video.category, JSON.stringify(video.topic)];
            await db.query(sql, values)
                .then((rows) => {
                    return resolve(rows);
                }).catch((err) => {
                    return reject(err);
                });
        })
    },


    isVideo: async (id) => {
        return new Promise(async (resolve, reject) => {
            let sql = `
                SELECT * FROM videos where videoId=?
            `;
            let values = [id];
            await db.query(sql, values)
                .then((rows) => {
                    return resolve(rows);
                }).catch((err) => {
                    return reject(err);
                });
        })
    },

    
    setDifficult: async (id, difficulty) => {
        return new Promise(async (resolve, reject) => {
            let sql = `
                UPDATE videos
                SET difficulty = ?
                WHERE videoId = ?;
            `;
            let values = [difficulty, id];
            await db.query(sql, values)
                .then((rows) => {
                    return resolve(rows);
                }).catch((err) => {
                    return reject(err);
                });
        })
    },
    // words: async (params) => {
    //     console.log(params)
    //     return new Promise(async (resolve, reject) => {
    //         await axios.post('http://localhost:8000/video', JSON.stringify({videoId : params.id.split('?')[1].slice(2)})).then(res=>{
    //             return resolve(res.data);
    //         }).catch(err=>{
    //             return reject(err);
    //         })
    //     })
    // }
};

module.exports = video;