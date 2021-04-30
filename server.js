const app = require('./app')
const  mongoose = require('mongoose')
require('dotenv').config()

const PORT = process.env.PORT || 8080
const serverURL = process.env.BASE_URL + PORT
// const  mongoURL = process.env.MONGO_URL


const mongoURL = process.env.DB_URL

app.listen(PORT,()=> console.log(serverURL + ' is running'))

mongoose
.set('useCreateIndex', true)
.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, ()=> console.log('mongodb connected'))