var mongoose = require('mongoose');
const express =  require('express')
var Post = require('./models/post');
mongoose.connect('mongodb://localhost:27017/express-kiss-api');
var db = mongoose.connection;
db.on('error', console.log);
db.once('open', function() {
  var post = new Post({title: 'mongose usage'});
  post.save(function(err){
    if(err) console.log(err);
  })
  console.log('success!');
});
const app = express()
app.get('/about',(req,res)=>{
  res.send('this is about page')
})

app.listen(5000, ()=> console.log('running on port 5000...'))
