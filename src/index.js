const express = require('express')

const {PORT} = require('./config/serverConfig')

const setpupAndStartServer = async () =>{
    // Create the express object 
    const app = express()
    app.listen(PORT,()=>{
        console.log(`Server is started at ${PORT}`);
    })
}

setpupAndStartServer();
