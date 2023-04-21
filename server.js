const express = require('express');
const app = express();
const students =require('./models/students.js')

//REQUIRES
    
//MIDDLEWARE
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use((req, res, next) => {
console.log('I run for all routes');
next();
});

app.use(express.urlencoded({extended:false}));

app.get('/students', (req,res)=>{
    // console.log(req) 
    res.render('Index',{students: students})
   
});
//[INDEX]

//ROUTES
app.get('/students/new', (req, res) => {
    res.render('New');
});

// New
app.post('/students', (req, res)=>{
    if(req.body.good === 'on'){ 
        req.body.good = true; 
    } else { 
        req.body.good = false; 
    }
    students.push(req.body);
    console.log(students);
    res.redirect('/students'); 
  });
  //POST



app.get('/students/:indexOfStudentsArray', function(req, res){
  res.render('Show', {
    student: students[req.params.indexOfStudentsArray]
  });
});
//[SHOW]




app.listen(3000, () => {
    console.log('listening');
  });


  module.exports = students; 