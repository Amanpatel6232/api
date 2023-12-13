const path=require("path")
const fs=require("fs")
const datapath=path.join(__dirname,"data")
console.log(datapath)
const filepath=datapath+"/"+"abc.txt";
fs.readFile(filepath,"utf8",(err,data)=>{
    if(!err)
    {
        console.log(data)
    }
    else{
        console.log(err)
    }
})