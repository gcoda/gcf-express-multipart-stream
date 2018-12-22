const { Readable } = require('stream')

module.exports = (req, res, next) => {
  if (req.rawBody && req.is('multipart/form-data')) {
    const readable = new Readable()
    readable._read = () => {}
    readable.push(req.rawBody)
    readable.push(null)
    Object.assign(req, readable)
  }
  next()
}
