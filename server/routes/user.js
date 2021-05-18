const express = require('express')
const router = express.Router()
const user = require('../models/user')
const jwt = require('jsonwebtoken')
const sha512 = require('../utils/sha512')
const key = 'capstone'


router.post('/signup', (req, res) => {
    let params = req.body
    try {
        user.isEmail(params).then((rows) => { 
            if (rows.length) {
                res.json({
                    status: 'error',
                    message: '존재하는 이메일 입니다'
                })
            } else { 
                user.signup(params).then((rows) => {
                    const token = jwt.sign({
                        idx: rows.insertId,
                    }, key, {
                        expiresIn: '12h',
                        issuer : 'capstone'
                    })
        
                    res.json({
                        status: 'ok',
                        token,
                        message: '회원가입 성공'
                    })
                })
            }
        })
    } catch (err) {
        res.json({
            status: 'error',
            message: '회원가입 실패'
        })
    }
})



router.post('/signin', (req, res) => {
    let params = req.body
    try {
        user.signin(params).then((rows) => {
            console.log(rows)
            if (rows.length === 1) {
                const token = jwt.sign({
                    idx: rows[0].idx,
                }, key, {
                    expiresIn: '12h',
                    issuer : 'capstone'
                })

                res.json({
                    status: 'ok',
                    user: rows[0],
                    message: '로그인 성공',
                    token
                })
            } else {
                res.json({
                    status: 'error',
                    message : '로그인 실패'
                })                
             }
        })
    } catch (err) {
        res.json({ status: 'error' })
    }
})


router.post('/get', (req, res) => {
    let decode = jwt.verify(req.headers.authorization.split(' ')[1], key)
    
    try {
        user.get(decode.idx).then(rows => { 
            res.json({
                status: 'ok',
                user : rows[0]
            })
        })
    } catch (err) {
        res.json({
            status: 'error',
        })
    }
})


module.exports = router