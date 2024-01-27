const FlightService = require('../services/flight-service');
const flightService = new FlightService();

const create =async (req,res)=>{
    try{
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data:flight,
            success:true,
            err:{},
            message:"successfully created a flight"
        })

    }catch(error){
        console.log(error);
        return res.status(500).json({
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

module.exports ={
    create,
    getAll,
    get
}