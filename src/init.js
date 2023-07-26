import express from 'express'

let app = express();

let port = 3000;

app.get('/', (req, res) => {
  res.send('Hola Mundo')
})

app.listen(port, () => {
  console.log(`App listen on port ${port}`)
})
