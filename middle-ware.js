const express=require("express")
const app=express()
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
app.use(midd);
app.get("/",(req,resp)=>{
    resp.send("Home Page")
})
app.get("/register",(req,resp)=>{
    resp.send("register Page")
})
app.get("/about",(req,resp)=>{
    resp.send("about Page")
})
app.get("/contact",(req,resp)=>{
    resp.send("contact Page")
})
app.listen(5000)