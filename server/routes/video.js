const express = require('express')
const router = express.Router()
const video = require('../models/video')
const vdata = require('../utils/data/video_info.json')
const vdata2 = require('../utils/data/video_info2.json')
const vdata3 = require('../utils/data/video_info_complete.json')

router.post('/', (req, res) => {
    let params = req.body
    try {
        video.test(params).then(result=>{
            res.json({
                status : 'ok'
            })
        })
    } catch (err) {
        res.json({ status: 'error' })
    }
})

router.post('/analyze', (req, res) => {
    let params = req.body
    try {
        let convertedId = params.id.split('?')[1].slice(2)
        if (convertedId.includes('&t=')) { 
            convertedId = convertedId.slice(0,convertedId.indexOf('&t='))
        }

        video.isVideo(convertedId).then(rv => { 
            if (rv.length !== 0) {
                console.log(rv)
                res.json({
                    message :'this video is already registered',
                    status: 'error',
                    videoIdx: rv[0].idx
                })
            } else { 
                video.analyze(params).then(result=>{
                    let output = JSON.parse(result.output)

                    console.log(Object.keys(output))
                    console.log(output.videoInfo)
                    if (!Object.keys(output).length) {
                        res.json({
                            status : 'error'
                        })
                    } else { 
                        video.analyzeComplete(output).then(ret => { 
                            res.json({
                                status : 'ok',
                                data: {
                                    videoIdx : ret,
                                    difficulty : output.difficulty,
                                    analyze : output,
                                    uncommon : output.uncommonList,
                                }
                            })
                        })
                    }
                })
            }
        })
    } catch (err) {
        res.json({ status: 'error' })
    }
})


router.post('/register', (req, res) => {
    let params = req.body;
    let channels = Object.keys(vdata3)

    const loop = async (channel) => {
        const promises = channel.map(async (v) => {
            return await video.register(v).then((rows) => rows)
        })
        const results = await Promise.all(promises)
        return results;
    }

    channels.map((channel, index) => {
        try {
            loop(vdata3[channel]).then((rows) => { 
                if (index == channels.length - 1) { 
                    res.json({
                        status: 'ok'
                    })
                }
            })
        } catch (err) {
            res.json({ status: 'error' })
        }
    })

    // let params = req.body;
    // let channels = Object.keys(vdata)

    // const loop = async (channel) => {
    //     const promises = channel.map(async (v) => {
    //         return await video.register(v).then((rows) => rows)
    //     })
    //     const results = await Promise.all(promises)
    //     return results;
    // }

    // channels.map((channel, index) => {
    //     try {
    //         loop(vdata[channel]).then((rows) => { 
    //             if (index == channels.length - 1) { 
    //                 res.json({
    //                     status: 'ok'
    //                 })
    //             }
    //         })
    //     } catch (err) {
    //         res.json({ status: 'error' })
    //     }
    // })
})


router.post('/dregister', (req, res) => { 
    try {
        vdata2.map((v) => {
            video.isVideo(v.videoId).then((rv) => { 
                if (rv) {
                    video.setDifficult(v.videoId, v.difficulty)
                } 
            })
        })
    } catch (err) { 
        res.json({
            status : 'error'
        })
    }
})


router.post('/list', (req, res) => {
    let params = req.body
    try {
        video.list(params).then(list => {
            video.top(params).then(toplist => { 
                res.json({
                    status : 'ok',
                    data: list,
                    top : toplist
                })
            })
        })
    } catch (err) {
        res.json({ status: 'error' })
    }
})


router.post('/saveView', (req, res) => {
    let params = req.body
    try {
        video.saveView(params).then(result => {
            res.json({
                status: 'ok'
            })
        })
    } catch (err) {
        res.json({ status: 'error' })
    }
})


router.post('/getView', (req, res) => {
    let params = req.body
    try {
        video.getView(params).then(result => {
            res.json({
                status: 'ok',
                data: result
            })
        })
    } catch (err) {
        res.json({ status: 'error' })
    }
})


router.post('/detail', (req, res) => {
    let params = req.body
    try {
        video.detail(params).then(result => {
            res.json({
                status: 'ok',
                data: result
            })
        })
    } catch (err) {
        res.json({ status: 'error' })
    }
})


router.post('/save', (req, res) => {
    let params = req.body
    try {
        video.save(params).then(result => {
            res.json({
                status: 'ok'
            })
        })
    } catch (err) {
        res.json({ status: 'error' })
    }
})


router.post('/getSave', (req, res) => {
    let params = req.body
    try {
        video.getSave(params).then(result => {
            res.json({
                status: 'ok',
                data: result
            })
        })
    } catch (err) {
        res.json({ status: 'error' })
    }
})


router.post('/sameCategory', (req, res) => {
    let params = req.body
    try {
        video.sameCategory(params).then(result => {
            res.json({
                status: 'ok',
                data: result
            })
        })
    } catch (err) {
        res.json({ status: 'error' })
    }
})

router.post('/sameDifficulty', (req, res) => {
    let params = req.body
    try {
        video.sameDifficulty(params).then(result => {
            res.json({
                status: 'ok',
                data: result
            })
        })
    } catch (err) {
        res.json({ status: 'error' })
    }
})



router.post('/search', (req, res) => {
    let params = req.body
    try {
        video.search(params).then(result => {
            video.total(params).then(total => { 
                res.json({
                    status: 'ok',
                    data: result,
                    total
                })
            })
        })
    } catch (err) {
        res.json({ status: 'error' })
    }
})


router.post('/evaluate', (req, res) => {
    let params = req.body
    try {
        video.evaluate(params).then(result => {
            res.json({
                status: 'ok',
            })
        })
    } catch (err) {
        res.json({ status: 'error' })
    }
})


module.exports = router