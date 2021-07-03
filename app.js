//Required packages

const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const mongoose = require('mongoose',{ useUnifiedTopology: true })

const postRoute = require('./routes/posts')
const postUsersRoute = require('./routes/users')
//Middlewares
app.use('/posts',postRoute)
app.use('/account',postUsersRoute)
app.use(cors())


require('dotenv/config')

//ROUTES

app.get('/',(req,res)=>
		
		{
			res.send('We are at home!')
		}	
	)
app.get('/posts',(req,res)=>
		
		{
			res.send('We are at posts!')
		}	
	)

//Connect to DB

mongoose.connect(
	process.env.DB_CONNECTION,
	{ useNewUrlParser: true },

	() => 
	console.log('Connected to db')
	)


//Connect to server

app.listen(3000)