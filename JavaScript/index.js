const crypto = require('crypto')

const secret = 'kjankfnka'
const hash = crypto.createHmac('swaEdu', secret).update('welcome to home').digest('hex')
console.log(hash)