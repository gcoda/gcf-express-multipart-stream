const express = require('express')
const graphqlHTTP = require('express-graphql')
const { graphqlUploadExpress } = require('graphql-upload')
const schema = require('./schema')
const cors = require('cors')
const app = express()
const gcfMultipartStream = require('gcf-express-multipart-stream')

app.use(cors())

app.use(gcfMultipartStream)

app.use(
  '/graphql',
  graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }),
  graphqlHTTP({ schema })
)

// gcloud beta functions deploy upload --trigger-http
exports.upload = app