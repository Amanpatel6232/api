const express=require("express")
const app=express()
const route=express.Router()
const midd=(req,resp,next)=>
{
    if(!req.query.age)
    {
        resp.send("please enter age")
    }
    else if(req.query.age<18){
        resp.send("your under age")
    }
    else{
        next()
    }
}
route.use(midd);
app.get("/",(req,resp)=>{
    resp.send("Home Page")
})
app.get("/register",(req,resp)=>{
    resp.send("register Page")
})
route.get("/about",(req,resp)=>{
    resp.send("about Page")
})
route.get("/contact",(req,resp)=>{
    resp.send("contact Page")
})
app.use("/",route)
app.listen(5000)