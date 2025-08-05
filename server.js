const express=require('express');//importing the express files
const dotenv=require('dotenv');//importing dotenv files
const cors=require('cors');//importing cors
const connectDB=require('./config/db');//importing database
dotenv.config();//loading env files
connectDB();//connecting to mongodb
const app=express();//creating an express application
app.use(cors());//frontend can interact with backend

//import routes
const donarroutes=require('./routes/donarroutes');
app.use('/api/donars',donarroutes);//when /api/donars is given it will go to donarroutes
const PORT=5000;//setting server port to 5000

//starting the server port
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})



