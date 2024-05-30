const express = require("express")
const {createTodo} = require("./types");
const { todo } = require("./db");

const app = express()

app.use(express.json())

app.post("/todos", async function(req, res){
    const createPayload = req.body;
    const parsePayLoad = createTodo.safeParse(createPayload);
    if(!parsePayLoad.success){
        req.status(411).json({
            msg : "You sent the wrong input",
        })
        return
    }
    await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false
    })

    res.json({
        msg : "Todo Created"
    })
})

app.get("/todos", async function(req, res){
    const todos = await todo.find({});

    res.json({
        todos
    })
})

app.put("/completed", async function(req, res){
    const updateTodo = req.body;
    const parsePayLoad = updateTodo.safeParse(updateTodo);
    if(!parsePayLoad.success){
        res.status(411).json({
            msg :"You sent a wrong inputs",
        })
        return;
    }
    await todo.update({
        _id : req.body.id
    }, {
        completed : true
    })
    res.json({
        msg : "Todo Marked as completed"
    })
})

app.listen(8080)