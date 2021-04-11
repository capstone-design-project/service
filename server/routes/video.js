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
        video.test(params).then(result=>{
            res.json({
                status : 'ok',
                data : {
                    difficulty : '3.0',
                    analyze : {
                        "videoId": "SuSTBXGiOsw",
                        "totalWords": 671,
                        "totalUniqueWords": 288,
                        "totalSentences": 106,
                        "avgSyllPerSec": 1.635172782657083,
                        "avgCEFRScore": 2.8270833333333334,
                        "readability": 5.138699580712789,
                        "uncommonRatio": 30.555555555555557,
                        "A1ratio": 42.36111111111111,
                        "A2ratio": 14.444444444444446,
                        "B1ratio": 9.444444444444445,
                        "B2ratio": 7.986111111111111,
                        "C1ratio": 3.402777777777778,
                        "C2ratio": 0.0,
                        "Nratio": 22.36111111111111
                    },
                    uncommon : ['hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf','hahahahoh', 'hihihihihihi', 'sfsfsfsfsf']
                }
            })
        })
    } catch (err) {
        res.json({ status: 'error' })
    }
})

module.exports = router