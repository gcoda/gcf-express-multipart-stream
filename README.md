# Create readable stream from req.rawBoy

For `graphql-upload` compatibility with Google Cloud Functions, but might be useful with other express middlewares

```javascript
const gcfMultipartStream = require('gcf-express-multipart-stream')
app.use(gcfMultipartStream)
app.use(
  '/graphql',
  graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }),
  graphqlHTTP({ schema })
)
exports.upload = app
```

`gcloud beta functions deploy upload --trigger-http`