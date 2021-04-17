const express = require('express')
const router = express.Router()
const video = require('../models/video')

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
            console.log(JSON.parse(result.output))
            res.json({
                status : 'ok',
                data : {
                    difficulty : '3.0',
                    analyze : JSON.parse(result.output),
                    uncommon : []
                }
            })
        })
    } catch (err) {
        res.json({ status: 'error' })
    }
})

module.exports = router