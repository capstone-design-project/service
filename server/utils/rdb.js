let mysql = require('mysql2')

if (!!process.env.SERVER_DB_HOST) db_host = process.env.SERVER_DB_HOST
if (!!process.env.SERVER_DB_USER) db_user = process.env.SERVER_DB_USER
if (!!process.env.SERVER_DB_PASSWORD) db_password = process.env.SERVER_DB_PASSWORD
if (!!process.env.SERVER_DB_DATABASE) db_database = process.env.SERVER_DB_DATABASE


let pool = mysql.createPool({
    connectionLimit: 10,
    host: db_host,
    user: db_user,
    password: db_password,
    database: db_database,
    dateStrings: 'date'
})

let DB = (function () {
    function _query (query, params) {
        return new Promise((resolve, reject) => {
            pool.getConnection(function (err, connection) {
                if (err) {
                    connection.release()
                    return reject(err)
                }

                connection.query(query, params, function (err, rows) {
                    connection.release()
                    if (!err) return resolve(rows)
                    else return reject(err)
                })

                connection.on('error', function (err) {
                    connection.release()
                    return resolve(err)
                })
            })
        })
    }

    function _isEmpty (rows) {
        if (!rows || rows.length == 0) return true
        else return false
    }

    return {
        query: _query,
        isEmpty: _isEmpty
    }
})()

module.exports = DB