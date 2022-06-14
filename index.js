//instantiate express module here
const express = require('express')

//use express in app variable here
const app = express()

//define the server port here
const PORT = 5000;

//create the homepage route here and inside it create res means, response, and it send string "Hello Express!" to the API
app.get('/', (req,res) => {
    // const data = {
    //     message: 'Halo apa kabar?',
    //     to: 5,
    //     from: 9
    // }

    res.send('Hello Express')
})

// Create listen here
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))