const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())




app.get('/animek', (req, res) => {
 
    var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'animedb'
})
    
    connection.connect()
    
    connection.query('SELECT * from animek', function (err, rows, fields) {
       // if (err) throw err;
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()
 
 

  })




  app.use(express.json());

  app.post('/felvitel_sorozat', (req, res) => {
 

    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'sorozatokadatb'
    })
    
    connection.connect()
    

    console.log(req.body.bevitel2);

    connection.query('INSERT INTO sorozatok (`sorozat_id`, `sorozat_nev`, `sorozat_tipus`, `sorozat_hossz`, `sorozat_evadszam`, `sorozat_megjelenes`) VALUES (NULL, "'+req.body.bevitel2+'" , "'+req.body.bevitel3+'", '+req.body.bevitel4+' , '+req.body.bevitel5+', "'+req.body.bevitel6+'")', function (err, rows, fields) {
        //if (err) throw err;
      
      res.send("Sikerült")
    })
    
    connection.end()
 
 

  })



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})