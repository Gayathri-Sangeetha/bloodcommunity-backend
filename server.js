const express=require('express');//importing the express files
const dotenv=require('dotenv');//importing dotenv files
const cors=require('cors');//importing cors
const connectDB=require('./config/db');//importing database
dotenv.config();//loading env files
connectDB();//connecting to mongodb
const app=express();//creating an express application
app.use(cors());//frontend can interact with backend
app.use(express.json());//required for req body
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);


//import routes
const donorRoutes=require('./routes/donorRoutes');
app.use('/api/donors',donorRoutes);//when /api/donars is given it will go to donarroutes
const PORT=5000;//setting server port to 5000

//starting the server port
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})



