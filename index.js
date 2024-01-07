const express = require('express')
var cors = require('cors')
const app = express();
const port = process.env.PORT || 5000 ;

const categories = require ('./data/categories.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/categories',(req,res)=>{
  res.send(categories)
})
app.get('/categories/:id',(req,res)=>{
  const id = req.params.id ;
  const selectedCategory = categories.find(c=> c.id == id);
  res.send(selectedCategory)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})