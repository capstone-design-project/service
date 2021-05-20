const express = require('express')
const router = express.Router()
const video = require('../models/video')
const vdata = require('../utils/data/video_info.json')
const vdata2 = require('../utils/data/video_info2.json')


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
        video.analyze(params).then(result=>{
            let output = JSON.parse(result.output)

            console.log(output)
            res.json({
                status : 'ok',
                data : {
                    difficulty : output.difficulty,
                    analyze : output,
                    uncommon : output.uncommonList,
                }
            })
        })
    } catch (err) {
        res.json({ status: 'error' })
    }
})


router.post('/register', (req, res) => { 
    let params = req.body;
    let channels = Object.keys(vdata)

    const loop = async (channel) => {
        const promises = channel.map(async (v) => {
            return await video.register(v).then((rows) => rows)
        })
        const results = await Promise.all(promises)
        return results;
    }

    channels.map((channel, index) => {
        try {
            loop(vdata[channel]).then((rows) => { 
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
        video.list(params).then(result => {
            res.json({
                status : 'ok',
                data : result
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

module.exports = router