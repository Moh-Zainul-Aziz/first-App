const express = require('express')
const app = express()
const port = 5000
const tutorRouter = require('./router/tutors')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// app.get('/mahasiswa/:nama/:alamat', (req,res) => {
//   const nama =req.params.nama
//   const alamat =req.params.alamat
//   res.send('mahasiswa nama : '+ nama + 'alamat : '+ alamat)
// })

app.use(tutorRouter)

app.listen(port, () => {
  console.log(`Wes jalan brooo ${port}`)
})