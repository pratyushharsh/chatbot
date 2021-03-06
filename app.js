'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const request = require('request')


app.set('port')
// Allow us to process the data
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// ROUTES
app.get("/", (req, res) => {
	res.send("Hii sexy")
})



// Facebook
app.get('/webhook/', function(req, res) {
	if(req.query['hub.verify_token'] === 'pratyush') {
		res.send(req.query['hub.challenge'])
	}
	res.send("Wrong Token")
})

app.listen(process.env.PORT, process.env.IP, function() {
	console.log("Server has started")
} )