const axios = require('axios')
let db = require('../utils/rdb');

let video = {
    analyze: async (params) => {

        let convertedId = params.id.split('?')[1].slice(2)
        if (convertedId.includes('&t=')) { 
            convertedId = convertedId.slice(0,convertedId.indexOf('&t='))
        }

        return new Promise(async (resolve, reject) => {
            await axios.post('http://localhost:8000/video', JSON.stringify({videoId : convertedId})).then(res=>{
                return resolve(res.data);
            }).catch(err=>{
                return reject(err);
            })
        })
    },


    register: async (video, cthumbnail) => {
        return new Promise(async (resolve, reject) => {
            let sql = `
                UPDATE videos SET cthumbnails=? WHERE videoId=?
            `;
            let values = [cthumbnail, video.videoId];
            await db.query(sql, values)
                .then((rows) => {
                    return resolve(rows);
                }).catch((err) => {
                    return reject(err);
                });
        })



        // return new Promise(async (resolve, reject) => {
        //     let sql = `
        //         UPDATE videos SET totalWords=?,totalUniqueWords=?,totalSentences=?, avgSyllPerSec=?, avgCEFRScore=?, avgWordCEFR=?, avgFreqCEFR=?,readability=?,avgSentenceLength=?,uncommonRatio=?,totalEasyRatio=?, totalMiddleRatio=?,totalHardRatio=?,wordEasyRatio=?,wordMiddleRatio=?, wordHardRatio=?,FreqEasyRatio=?,FreqMiddleRatio=?,FreqHardRatio=? WHERE videoId=?
        //     `;
        //     let values = [video.totalWords ,video.totalUniqueWords ,video.totalSentences ,video.avgSyllPerSec ,video.avgCEFRScore ,video.avgWordCEFR ,video.avgFreqCEFR ,video.readability ,video.avgSentenceLength ,video.uncommonRatio ,video.totalEasyRatio ,video.totalMiddleRatio ,video.totalHardRatio ,video.wordEasyRatio , video.wordMiddleRatio, video.wordHardRatio , video.FreqEasyRatio , video.FreqMiddleRatio , video.FreqHardRatio , video.videoId];
        //     await db.query(sql, values)
        //         .then((rows) => {
        //             return resolve(rows);
        //         }).catch((err) => {
        //             return reject(err);
        //         });
        // })

        // return new Promise(async (resolve, reject) => {
        //     let sql = `
        //         UPDATE videos SET difficulty=?, uniqueList=?, uncommonList=?, easyWordList=?, middleWordList=?, hardWordList=?, unrankedWordList=? WHERE videoId=?
        //     `;
        //     let values = [video.difficulty, JSON.stringify(video.uniqueList),JSON.stringify(video.uncommonList),JSON.stringify(video.easyWordList),JSON.stringify(video.middleWordList),JSON.stringify(video.hardWordList), JSON.stringify(video.unrankedWordList), video.videoId];
        //     await db.query(sql, values)
        //         .then((rows) => {
        //             return resolve(rows);
        //         }).catch((err) => {
        //             return reject(err);
        //         });
        // })


        // return new Promise(async (resolve, reject) => {
        //     let sql = `
        //         INSERT INTO videos (videoId, publishedDate, channelId, channelTitle,title, description ,thumbnails ,category, topic) VALUES (?,?,?,?,?,?,?,?,?)
        //     `;
        //     let values = [video.videoId, video.publishedDate, video.channelId, video.channelTitle, video.title, video.description, video.thumbnails, video.category, JSON.stringify(video.topic)];
        //     await db.query(sql, values)
        //         .then((rows) => {
        //             return resolve(rows);
        //         }).catch((err) => {
        //             return reject(err);
        //         });
        // })
    },


    isVideo: async (id) => {
        return new Promise(async (resolve, reject) => {
            let sql = `
                SELECT category, idx, videoId, channelTitle, title, thumbnails, difficulty 
                FROM videos where videoId=?
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
                    'difficulty' , difficulty,
                    'cthumbnails', cthumbnails
                    )) , ']'
                ) as videos
            FROM videos
            group by category
            order by rand()
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
                    'difficulty' , vd.difficulty,
                    'cthumbnails', vd.cthumbnails
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
                SELECT category, idx, videoId, channelTitle, title, cthumbnails, thumbnails, difficulty , topic, case when length(description) > 350
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
                    'difficulty' , vd.difficulty,
                    'cthumbnails', vd.cthumbnails
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
                SELECT category, idx, videoId, channelTitle, case when length(title) > 85
                then concat(substring(title, 1, 85), '...')
                else title end as 'title' , thumbnails, difficulty , cthumbnails
                from videos
                where  category = (
                        select category
                        from videos
                        where idx = ?
                    )
                order by rand()
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
                SELECT category, idx, videoId, channelTitle,  case when length(title) > 85
                then concat(substring(title, 1, 85), '...')
                else title end as 'title' , thumbnails, difficulty , cthumbnails
                from videos
                where difficulty = (
                    select difficulty
                    from videos
                    where idx = ?
                )
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

    top: async (params) => {
        return new Promise(async (resolve, reject) => {
            let sql = `
                    SELECT
                        category, idx, videoId, channelTitle, title, thumbnails, difficulty
                    from videos
                    order by rand()
                    limit 5
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

    usertop: async (params) => {
        return new Promise(async (resolve, reject) => {
            let sql = `
                    SELECT
                    category, idx, videoId, channelTitle, title, thumbnails, difficulty
                from videos
                order by ABS(videos.difficulty-((?)))
                limit 5
            `;
            let values = [params.difficulty];
            await db.query(sql, values)
                .then((rows) => {
                    return resolve(rows);
                }).catch((err) => {
                    return reject(err);
                });
        })
    },

    search: async (params) => {
        return new Promise(async (resolve, reject) => {
            let sql = `
            select category, idx, videoId, channelTitle, title, thumbnails, difficulty, cthumbnails
            from videos
            where title LIKE '%${params.search}%' OR
                  description LIKE '%${params.search}%' OR
                  category LIKE '%${params.search}%'
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

    total: async (params) => {
        return new Promise(async (resolve, reject) => {
            let sql = `
            select count(*) as cnt
            from videos
            where title LIKE '%${params.search}%' OR
                  description LIKE '%${params.search}%' OR
                  category LIKE '%${params.search}%'
            `;
            let values = [];
            await db.query(sql, values)
                .then((rows) => {
                    return resolve(rows[0].cnt);
                }).catch((err) => {
                    return reject(err);
                });
        })
    },
    
    
    analyzeComplete: async (output) => {
        return new Promise(async (resolve, reject) => {
            let sql = `
                INSERT INTO videos (videoId, publishedDate, channelId, channelTitle,title, description ,thumbnails ,category, topic, difficulty, uniqueList,uncommonList, easyWordList,middleWordList, hardWordList, unrankedWordList , cthumbnails, totalWords, totalUniqueWords , totalSentences, avgSyllPerSec, avgCEFRScore, avgWordCEFR, avgFreqCEFR, readability, avgSentenceLength, uncommonRatio, totalEasyRatio, totalMiddleRatio, totalHardRatio, wordEasyRatio, wordMiddleRatio, wordHardRatio, FreqEasyRatio, FreqMiddleRatio, FreqHardRatio) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
            `;
            let values = [output.videoInfo.videoId, output.videoInfo.publishedDate, output.videoInfo.channelId, output.videoInfo.channelTitle, output.videoInfo.title, output.videoInfo.description, output.videoInfo.thumbnails, output.videoInfo.category, JSON.stringify(output.videoInfo.topic),output.difficulty, JSON.stringify(output.uniqueList),JSON.stringify(output.uncommonList),JSON.stringify(output.easyWordList),JSON.stringify(output.middleWordList),JSON.stringify(output.hardWordList), JSON.stringify(output.unrankedWordList), output.videoInfo.channelImage, output.totalWords, output.totalUniqueWords , output.totalSentences, output.avgSyllPerSec, output.avgCEFRScore, output.avgWordCEFR, output.avgFreqCEFR, output.readability, output.avgSentenceLength, output.uncommonRatio, output.totalEasyRatio, output.totalMiddleRatio, output.totalHardRatio, output.wordEasyRatio, output.wordMiddleRatio, output.wordHardRatio, output.FreqEasyRatio, output.FreqMiddleRatio, output.FreqHardRatio];
            await db.query(sql, values)
                .then((rows) => {
                return resolve(rows.insertId);
            }).catch((err) => {
                return reject(err);
            });
        })
    },


    evaluate: async (params) => {
        return new Promise(async (resolve, reject) => {
            let sql = `
                UPDATE users SET level=? WHERE idx=?
            `;
            let values = [params.level , params.userIdx];
            await db.query(sql, values)
                .then((rows) => {
                    return resolve(rows);
                }).catch((err) => {
                    return reject(err);
                });
        })
    },



    words: async (params) => {
        return new Promise(async (resolve, reject) => {
            let sql = `
                select ${params.type} from videos where idx=?
            `;
            let values = [params.videoIdx];
            await db.query(sql, values)
                .then((rows) => {
                    return resolve(rows[0][params.type]);
                }).catch((err) => {
                    return reject(err);
                });
        })
    },


    ratio: async (params) => {
        return new Promise(async (resolve, reject) => {

            let sql = `
                select totalWords, totalUniqueWords , totalSentences, avgSyllPerSec, avgCEFRScore, avgWordCEFR, avgFreqCEFR, readability, avgSentenceLength, uncommonRatio, totalEasyRatio, totalMiddleRatio, totalHardRatio, wordEasyRatio, wordMiddleRatio, wordHardRatio, FreqEasyRatio, FreqMiddleRatio, FreqHardRatio from videos where idx=?
            `;

            let values = [params.videoIdx];
            await db.query(sql, values)
                .then((rows) => {
                    return resolve(rows[0]);
                }).catch((err) => {
                    return reject(err);
                });
        })
    },
};



module.exports = video;