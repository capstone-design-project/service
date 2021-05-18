const crypto = require('crypto');

module.exports = (password, salt) => { 
    let hash = crypto.createHmac('sha512', salt);
    hash.update(password)
    let value = hash.digest('hex')
    return value
}