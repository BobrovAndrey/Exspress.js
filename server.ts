import express = require('express')
const app = express();


app.get('/', (req, res, next) => {
  res.send('Tour Booking API')
})
app.listen(process.env.PORT || 8091, () => console.log('Server started...'))