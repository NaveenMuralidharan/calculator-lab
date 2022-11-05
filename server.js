require('dotenv').config()

const express = require('express');

const app = express();




// ROUTES

// calc route
app.get('/calc/:num1/:num2', (req, res)=> {

    let sum = Number(req.params.num1)+Number(req.params.num2)
    res.send(`the sum is ${sum}`)

})

app.get('/someroute', (req, res)=>{
    console.log('req.query', req.query)
    res.send('someroute accessed')
})



app.get('/calcquery/:num1/:num2', (req, res)=>{


    if(req.query.operation){

        // calc functions

            // sum
                if(req.query.operation === 'sum'){
                    let sum = Number(req.params.num1) + Number(req.params.num2)
                    res.send('the sum is '+ sum)
                }
            
            // difference
                if(req.query.operation === 'difference'){
                    let difference = Number(req.params.num1) - Number(req.params.num2)
                    res.send('the difference is '+ difference)
                }

            // multiply
                if(req.query.operation === 'multiply'){
                    let product = Number(req.params.num1) * Number(req.params.num2)
                    res.send('the product is ' + product)
                }

            // divide
                if(req.query.operation === 'divide'){

                    let remainder = Number(req.params.num1) % Number(req.params.num2)
                    res.send('the remainder is ' + remainder)
                }

    } else {
        res.send('No calc operation chosen')
    }

})

app.listen(process.env.PORT, ()=>{
    console.log('app is running at '+ process.env.PORT);
})