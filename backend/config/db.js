const mongoose = require('mongoose')

async function connectDB() {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })

  const db = mongoose.connection

  db.on(
    'error',
    console.error.bind(console, 'CONNECTION ER:'.red.bold.bgYellow)
  )

  db.once('open', () =>
    console.log(
      `DATABASE OK @ ${db.host.split('-')[0]} mongoDB`.brightCyan.bold
    )
  )
}

module.exports = connectDB
