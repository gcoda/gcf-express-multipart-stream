const { GraphQLSchema, GraphQLObjectType, GraphQLBoolean } = require('graphql')
const { GraphQLUpload } = require('graphql-upload')

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      one: {
        // Type Query must define one or more fields.
        description: 'must',
        type: GraphQLBoolean,
        async resolve() {
          return true
        },
      },
    },
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      uploadImage: {
        description: 'Uploads an image.',
        type: GraphQLBoolean,
        args: {
          image: {
            description: 'Image file.',
            type: GraphQLUpload,
          },
        },
        async resolve(parent, { image }) {
          const { filename, mimetype, createReadStream } = await image
          const stream = createReadStream()
          console.log({ image })
          // Promisify the stream and store the file, then…
          return true
        },
      },
    },
  }),
})
module.exports = schema
