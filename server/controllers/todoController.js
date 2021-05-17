const Todo = require("../models/todo")


exports.todoManyPostController = async (req, res, next)=>{
    try {
        await Todo.insertMany(req.body);
        res.json({message: 'Data insart successfully!'})        
    } catch (error) {
        console.log(error);
    }
}

exports.todoGetController = async (req, res, next)=>{
    const page = Number(req.query.page)
    console.log(page);
    try {
        const data = await Todo.find({})
        .skip(2*page)
        .limit(2)
        res.json({data})
    } catch (error) {
        console.log(error);
    }
}