const express = require('express');
const app = express();
const mongoose = require('mongoose')
const moment = require('moment');
const numbers = require('./models/numbers')

const accountSid = 'AC230f0fd2929762feedebe46703a5a6b2'; 
const authToken = '45cfb654de87b85db677479463190435'; 
const client = require('twilio')(accountSid, authToken);
const MessagingResponse = require('twilio').twiml.MessagingResponse;



var bodyParser = require('body-parser')
const cors = require('cors')
app.use(cors())



app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())

const allData = []

app.get('/api/:phone', (req, res) => {
    console.log(req.params.phone)
    client.messages.list({
        to: req.params.phone,
        limit: 20
    })
    .then(messages => {

        let inbound = messages.filter(messages =>  messages.direction === 'inbound')
        let result = inbound.map(a => {
            return {
                from: a.from,
                body: a.body,
                time: moment.utc(a.dateSent).fromNow()
            }
        })
        res.status(200).send(result)

        

})})

app.get('/phonelist', (req, res)=> {
    const numberFind = numbers.find()
    numberFind.then(data => {
        let result = data.map(a => {
            return {
                number: a.number,
                location: a.location,
                shortCode: a.shortCode,
                status: a.status,
                createdAt: moment.utc(a.createdAt).fromNow()
            }
        })

        res.status(200).send(result)
    })
})


app.post('/create', (req, res, next) => {
    console.log(req.body)
    const number = new numbers({
        number: req.body.number,
        location: req.body.location,
        shortCode: req.body.shortCode,
        status: req.body.status,
        createdAt: new Date()
     })
     number.save().then(data => console.log(data))
     res.status(200).json({
         message: 'Number Uploaded'
     })
})



mongoose.connect("mongodb://mustafa:12345@cluster0-shard-00-00-uiezm.mongodb.net:27017,cluster0-shard-00-01-uiezm.mongodb.net:27017,cluster0-shard-00-02-uiezm.mongodb.net:27017/project-sms?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true", {useNewUrlParser: true})
.then(() => {
    console.log("Connected to Database")
})
.catch((err) => {
    console.log(err,"Error Connecting to Database")
})



// app.use('/api/posts', postRoutes)





module.exports = app;