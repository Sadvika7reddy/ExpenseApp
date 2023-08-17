const bodyParser=require('body-parser');

const express=require('express');

const sequelize=require('./util/database');

const cors=require('cors')

const expenseRoutes=require('./routes/expenseData')

const app=express();

app.use(cors());
app.use(bodyParser.json({ extended: false }));

app.use(expenseRoutes);

sequelize.sync()
.then((result)=>{
    app.listen(3000);
})
.catch(err=>{
    console.log(err)
})