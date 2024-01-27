const {ClientErrorCodes,ServerErrorCodes,SuccessCodes}= require('../utils/error-codes')

const validateCreateFlight=(req,res,next)=>{
    if(
       !req.body.flightNumber||
       !req.body.airplaneId||
       !req.body.departureAirportId||
       !req.body.arrivalAirportId||
       !req.body.arrivalTime||
       !req.body.departureTime||
       !req.body.price
        ){
        // if any of the body param is missing we come inside the if condition
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data:{},
            success:false ,
            message:'Invalid request body for create flight',
            err:'missing mandatory property to create a flight'
        });
    }

    next();

}

module.exports = {
    validateCreateFlight
}