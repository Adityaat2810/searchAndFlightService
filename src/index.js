const express = require('express')
const bodyParser = require('body-parser')

const {PORT} = require('./config/serverConfig')

const setpupAndStartServer = async () =>{
    
    // Create the express object 
    const app = express()

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT,()=>{
        console.log(`Server is started at ${PORT}`);
       
    })
}

setpupAndStartServer();
