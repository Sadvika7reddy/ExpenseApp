const Expenses=require('../models/expense')
exports.postAddDetails=async (req,res,next)=>{
    try{
        if(!req.body.amount){
            throw new Error('amount is mandotory')
        }
        const amount=req.body.amount;
        const category=req.body.category;
        const discription=req.body.discription
        const data=await Expenses.create({amount:amount,category:category,discription:discription})
        res.status(201).json({newExpensesDetails:data})
    }
    catch(err){
       res.status(500).json({
        error:err
       })
    }
}

exports.getAddDetails=async (req,res,next)=>{
    const users=await Expenses.findAll();
    res.status(200).json({allUsers:users})
}

exports.deleteAddDetails=async (req,res,next)=>{
    const userId=req.params.productId;
    await Expenses.destroy({where:{id:userId}})
    res.sendStatus(200)
}