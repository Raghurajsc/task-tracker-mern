const Task = require("../module/Task");


// CREATE TASK
exports.createTask = async(req,res)=>{
    try{

        const task = await Task.create(req.body);

        res.status(201).json(task);

    }catch(err){
        res.status(500).json({
            message:err.message
        });
    }
};



// GET ALL TASKS
exports.getTasks = async(req,res)=>{
    try{

        const tasks = await Task.find().sort({
            createdAt:-1
        });

        res.json(tasks);

    }catch(err){
        res.status(500).json({
            message:err.message
        });
    }
};



// UPDATE TASK
exports.updateTask = async(req,res)=>{
    try{

        const task = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );

        res.json(task);

    }catch(err){

        res.status(500).json({
            message:err.message
        });

    }
};



// DELETE TASK
exports.deleteTask = async(req,res)=>{
    try{

        await Task.findByIdAndDelete(req.params.id);

        res.json({
            message:"Task deleted"
        });

    }catch(err){
        res.status(500).json({
            message:err.message
        });
    }
};