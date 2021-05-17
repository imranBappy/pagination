const User = require("../models/user");

exports.userManyPostController = async (req, res, next)=>{
    try {
        await User.insertMany(req.body);
        res.json({message: 'Data insart successfully!'})        
    } catch (error) {
        console.log(error);
    }
}


exports.userGetController = async (req, res, next)=>{
    const page = Number(req.query.page)
    try {
        const users = await User.find({})
            .skip(2*page)
            .limit(10)
        res.json({users})

    } catch (error) {
        console.log(error);
    }
}