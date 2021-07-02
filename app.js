//Required packages

const express = require('express')

const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const mongoose = require('mongoose',{ useUnifiedTopology: true })

const postRoute = require('./routes/posts')

app.use('/posts',postRoute)


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