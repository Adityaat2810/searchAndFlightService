const express = require('express')
const bodyParser = require('body-parser')

const {PORT} = require('./config/serverConfig')
const ApiRoutes = require('./routes/index');

const setpupAndStartServer = async () =>{
    
    // Create the express object 
    const app = express()

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',ApiRoutes);

    app.listen(PORT,()=>{
        console.log(`Server is started at ${PORT}`);
       
    })

    
   /*
    if(process.env.SYNC_DB){
        db.sequelize.sync({alter:true}); // we need to sync just one time whenever you do one association
    }
    const city = await City.findOne({
        where:{
            id:9
        }

    });

    // powerful thinf 
    const airports = await city.getAirports();
    // many functions linke getAitrports(),setAirports(),addAirports(); etc
   
   */

}

setpupAndStartServer();
