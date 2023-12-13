const mongoose=require("mongoose");
async function getdata()
{
    await mongoose.connect("mongodb://0.0.0.0:27017/Hcl")
    const studentSchema=new mongoose.Schema({
        rollno:Number,
        name:String,
        marks:Number
    })
    const studentModel=mongoose.model("students",studentSchema)
    // const data=new studentModel ({rollno:125,name:"Gourav",marks:65})
    const result=await studentModel.deleteOne({rollno:125})
}
getdata()