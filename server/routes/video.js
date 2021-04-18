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

module.exports = router