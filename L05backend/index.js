const express = require('express');
const app = express();
const path = require('path'); // Import the path module

const PORT = 3000;
const Politicians={
  'IK':{ age:"70",
   birthlocation:"mianwali",
   birthname:"IK"
},
'nawaz':{ age:"75",
birthlocation:"lahore",
birthname:"MIAN"
},
'Siraj':{ age:"60",
birthlocation:"in the middle of no where",
birthname:"Hall siraf jammat e islami"
},
'Fazal ur rehman':{ age:"60",
birthlocation:"Bano",
birthname:"Fazalur rehaman"
},
}
app.get("/", (req, res) => { 
    // Use path.join to concatenate directory paths
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/api:Name',(req,res)=>{
    // prams parameters--->/api:Name--->Name is the parameter that we will put there
    // console.log(req.params.Name)
    const PoliNames=req.params.Name
    // above we are requesting 
    if (Politicians[PoliNames]) {
        res.json(Politicians[PoliNames])
        console.log(Politicians[PoliNames])
    }
    else

     res.json('not found')
})

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
});
