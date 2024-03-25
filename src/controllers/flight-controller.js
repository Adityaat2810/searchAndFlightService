const FlightService = require('../services/flight-service');
const flightService = new FlightService();
const {ClientErrorCodes,ServerErrorCodes,SuccessCodes}= require('../utils/error-codes')

const create =async (req,res)=>{
    try{

        let flightRequestData={

          flightNumber:req.body.flightNumber,
          airplaneId:req.body.airplaneId,
          departureAirportId:req.body.departureAirportId,
          arrivalAirportId:req.body.arrivalAirportId,
          arrivalTime:req.body.arrivalTime,
          departureTime:req.body.departureTime,
          price:req.body.price
          
        }

        const flight = await flightService.createFlight(flightRequestData);
        return res.status(SuccessCodes.OK).json({
            data:flight,
            success:true,
            err:{},
            message:"successfully created a flight"
        })

    }catch(error){
        console.log(error);
        return res.status(ClientErrorCodes.NOT_FOUND).json({
            data:{},
            success:false,
            message:'not able to create a flight',
            err:error
        })

    }
}

const getAll = async (req, res) => {
    try {
      const flight = await flightService.getAllFlights(req.query);
      return res.status(201).json({
        data: flight,
        success: true,
        message: "Flight Fetched successfully",
        err: {},
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Not able to fetch a flight",
        err: error,
      });
    }
  };
  
  const get = async (req, res) => {
    try {
      const flight = await flightService.getFlight(req.params.id);
      console.log(flight)
      return res.status(201).json({
        data: flight,
        success: true,
        message: "Flight Fetched successfully",
        err: {},
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Not able to fetch a flight",
        err: error,
      });
    }
  };

  const update = async(req,res)=>{
    try {
      const flight = await flightService.updateFlight(req.params.id,req.body);
      console.log(flight)
      return res.status(201).json({
        data: flight,
        success: true,
        message: "successfully updated flight",
        err: {},
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Not able to update a flight",
        err: error,
      });
    }

  }

module.exports ={
    create,
    getAll,
    get,
    update
}