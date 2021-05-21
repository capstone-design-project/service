const axios = require('axios')
let db = require('../utils/rdb');

let video = {
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


    list: async () => {
        return new Promise(async (resolve, reject) => {
            let sql = `
            SELECT
            category,
            CONCAT('[',
                GROUP_CONCAT(
                JSON_OBJECT(
                    'idx', idx,
                    'videoId', videoId,
                    'channelTitle', channelTitle,
                    'title', (select case when length(title) > 85
                    then concat(substring(title, 1, 85), '...')
                    else title end as 'title'),
                    'thumbnails' , thumbnails,
                    'category' , category,
                    'difficulty' , difficulty
                    )) , ']'
                ) as videos
            FROM videos
            group by category
            `;
            let values = [];
            await db.query(sql, values)
                .then((rows) => {
                    return resolve(rows);
                }).catch((err) => {
                    return reject(err);
                });
        })
    },


    saveView: async (params) => {
        return new Promise(async (resolve, reject) => {
            let sql = `
                INSERT INTO views (user, video) VALUES (?,?);
            `;
            let values = [params.user, params.video];
            await db.query(sql, values)
                .then((rows) => {
                    return resolve(rows);
                }).catch((err) => {
                    return reject(err);
                });
        })
    },


    getView: async (params) => {
        return new Promise(async (resolve, reject) => {
            let sql = `
                select
                date_format(views.date, '%Y-%m-%d') as date,
                CONCAT('[',
                GROUP_CONCAT(
                JSON_OBJECT(
                    'idx', vd.idx,
                    'videoId', vd.videoId,
                    'channelTitle', vd.channelTitle,
                    'title', (select case when length(vd.title) > 85
                    then concat(substring(vd.title, 1, 85), '...')
                    else vd.title end as 'title'),
                    'thumbnails' , vd.thumbnails,
                    'difficulty' , vd.difficulty
                    )) , ']'
                ) as videos
                from views
                left join videos vd on views.video = vd.idx
                where views.user=?
                group by date_format(views.date, '%Y-%m-%d')
                order by date DESC;
            `;
            let values = [params.user];
            await db.query(sql, values)
                .then((rows) => {
                    return resolve(rows);
                }).catch((err) => {
                    return reject(err);
                });
        })
    },


    detail: async (params) => {
        return new Promise(async (resolve, reject) => {
            let sql = `
                select *, case when length(description) > 350
                then concat(substring(description, 1, 350), '...')
                else description end as 'edescription'
                from videos
                where idx=?
            `;
            let values = [params.video];
            await db.query(sql, values)
                .then((rows) => {
                    return resolve(rows[0]);
                }).catch((err) => {
                    return reject(err);
                });
        })
    },


    save: async (params) => {
        return new Promise(async (resolve, reject) => {
            let sql = `
                INSERT INTO saves (user, video) VALUES (?,?);
            `;
            let values = [params.user, params.video];
            await db.query(sql, values)
                .then((rows) => {
                    return resolve(rows);
                }).catch((err) => {
                    return reject(err);
                });
        })
    },




    getSave: async (params) => {
        return new Promise(async (resolve, reject) => {
            let sql = `
                select
                date_format(saves.date, '%Y-%m-%d') as date,
                CONCAT('[',
                GROUP_CONCAT(
                JSON_OBJECT(
                    'idx', vd.idx,
                    'videoId', vd.videoId,
                    'channelTitle', vd.channelTitle,
                    'title', (select case when length(vd.title) > 85
                    then concat(substring(vd.title, 1, 85), '...')
                    else vd.title end as 'title'),
                    'thumbnails' , vd.thumbnails,
                    'difficulty' , vd.difficulty
                    )) , ']'
                ) as videos
                from saves
                left join videos vd on saves.video = vd.idx
                where saves.user=?
                group by date_format(saves.date, '%Y-%m-%d')
                order by date DESC;
            `;
            let values = [params.user];
            await db.query(sql, values)
                .then((rows) => {
                    return resolve(rows);
                }).catch((err) => {
                    return reject(err);
                });
        })
    },



    sameCategory: async (params) => {
        return new Promise(async (resolve, reject) => {
            let sql = `
                select *
                from videos
                where  category = (
                        select category
                        from videos
                        where idx = ?
                    )
                order by rand()
                limit 5
            `;
            let values = [params.video];
            await db.query(sql, values)
                .then((rows) => {
                    return resolve(rows);
                }).catch((err) => {
                    return reject(err);
                });
        })
    },


    sameDifficulty: async (params) => {
        return new Promise(async (resolve, reject) => {
            let sql = `
                select *
                from videos
                order by ABS(videos.difficulty-((
                        select difficulty
                        from videos
                        where idx = ?
                )))
                limit 5
            `;
            let values = [params.video];
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