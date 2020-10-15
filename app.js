const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const mongoose = require('mongoose')
const schema = require('./schema/shema')
const cors = require('cors')

const app = express()

app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

mongoose.connect('mongodb+srv://@learnnodejs.uwu9r.mongodb.net/graphql?retryWrites=true&w=majority',
  {
    user: 'Spical',
    pass: '15069341Anhquang@'
  })
  .then(result => {
    app.listen(4000)
  })
  .catch(err => console.log(err))