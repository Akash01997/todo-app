const express = require("express")
const {createTodo} = require("./types");

const app = express()

app.use(express.json())

app.post("/todos", function(req, res){
    const createPayload = req.body;
    const parsePayLoad = createTodo.safeParse(createPayload);
    if(!parsePayLoad.success){
        req.status(411).json({
            msg : "You sent the wrong input",
        })
        return
    }
})

app.get("/todos", function(req, res){

})

app.put("/completed", function(req, res){
    const updateTodo = req.body;
    const parsePayLoad = updateTodo.safeParse(updateTodo);
    if(!parsePayLoad.success){
        res.status(411).json({
            msg :"You sent a wrong inputs",
        })
        return;
    }
})

app.listen(8080)