let express = require('express')
let cors = require('cors')
let bodyParser = require('body-parser')

const dotenvPath = __dirname + '\/' + '.env'
require('dotenv').config({ path: dotenvPath })
const serverPort = 5000
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/video', require('./routes/video'))

app.listen(serverPort, (req, res) => {
    console.log(`Sever is running on port ${serverPort}!`)
})
