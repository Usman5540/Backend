const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const path = require('path'); // Import the path module

const PORT = 3000;
const Politicians={
  'ik':{ age:"70",
   birthlocation:"mianwali",
   birthname:"IK"
},
'nawaz':{ age:"75",
birthlocation:"lahore",
birthname:"MIAN"
},
'siraj':{ age:"60",
birthlocation:"in the middle of no where",
birthname:"Hall siraf jammat e islami"
},
'fazal ur rehman':{ age:"60",
birthlocation:"Bano",
birthname:"Fazalur rehaman"
}, 


 'Dean':  {
    age:"30",
    birthlocation:"Landon",
    birthname:"Dale"
}
}
 
app.get("/", (req, res) => { 
    // Use path.join to concatenate directory paths
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/api:Name',(req,res)=>{
    // prams parameters--->/api:Name--->Name is the parameter that we will put there
    // console.log(req.params.Name)
    const PoliNames=req.params.Name.toLocaleLowerCase()
    // above we are requesting 
    if (Politicians[PoliNames]) {
        res.json(Politicians[PoliNames])
        console.log(Politicians[PoliNames])
    }
    else

     res.json('not found')
})












const messageSchema = new mongoose.Schema({
    name:String,
    email:String
})
const message = mongoose.model("message",messageSchema)
app.get("/add", async (req,res)=>{
 await   message.create({name:"ali", email:"ali@gmail.com"})
        
    })



mongoose.connect("mongodb://127.0.0.1:27017",{
    dbName:"backend"
  }).then(()=>console.log("db connect") ).catch(e=>console.log(e))


app.listen( PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
});
