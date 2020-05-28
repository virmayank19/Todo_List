const express= require("express");
const app= express();
const port =7000
const bodyParser=require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.static('public'))


//import routes 
require("./routes")(app);

app.set('view engine','ejs');

app.listen(port,()=>{
    
console.log("server is runnning.........."+port)
})
