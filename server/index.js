require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const todoRouter = require('./routers/todo')
const cors = require('cors')

const connectDB = async() =>{
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@todos.jvgg1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,{
            useUnifiedTopology: true,
            autoIndex: false
        })
    } catch (error) {
        console.log(error.message);
        process.exit(1)
    }
}
connectDB()

const app = express();
app.use(cors())

app.use(express.json())
app.use('/api/todos', todoRouter)


const PORT = 5000;

app.listen((PORT), ()=> console.log(`server started on port ${5000}`))