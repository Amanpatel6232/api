const path=require("path")
const fs=require("fs")
const datapath=path.join(__dirname,"data")
console.log(datapath)
const filepath=datapath+"/"+"abc.txt";
console.log(filepath)
fs.writeFileSync(filepath,"My name is Aman");
console.log("File Created successfully");