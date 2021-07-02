const express = require('express')

const app = express()

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

app.listen(3000)