const express = require("express")
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')

const PORT = 3001

const app = express()

// Configure the CORS middleware with specific origin
app.use(cors({
  origin: 'http://localhost:5173' // Whitelist localhost:5173
}));

app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(bodyParser.json())

const employees = [
  {
    id: 1,
    name: 'John',
    status: 'Working',
    img: 'https://ozgrozer.github.io/100k-faces/0/6/006689.jpg'
  },
  {
    id: 2,
    name: 'Jack',
    status: 'Working',
    img: 'https://ozgrozer.github.io/100k-faces/0/7/007934.jpg'
  },
  {
    id: 3,
    name: 'Sheli',
    status: 'Working',
    img: 'https://ozgrozer.github.io/100k-faces/0/9/009644.jpg'
  },
  {
    id: 4,
    name: 'Eitan',
    status: 'Working',
    img: 'https://ozgrozer.github.io/100k-faces/0/8/008887.jpg'
  },
]

app.get('/users', (req, res) => {
  res.send(employees);
  // res.sendStatus(500)
})

app.post('/users/:id', (req, res) => {
  const index = employees.findIndex((obj => obj.id === +req.params.id));
  employees[index].status = req.body.status
  res.send(employees);
  // res.sendStatus(500)
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})