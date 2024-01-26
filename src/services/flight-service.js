const {FlightRepository, AirplaneRepository} = require('../repository/index')

class FlightService{

    constructor(){
        this.airplaneRepository=new AirplaneRepository()
        this.flightRepository= new FlightRepository()
    }

    async createFlight(data){
        try{

            //console.log(data)

            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            console.log(airplane)
            const flight = await this.flightRepository.createFlight({...data,totalSetsAvailable:airplane.capacity
            });

            return flight ;

        }catch(error){

            console.log("something went wrong at service layer");
            throw{error};

        }
    }

    async getFlightData(){
        //todo
    }
}

module.exports  =FlightService

/**
 * {
 *  flightNumber,
 *  airplaneId ,
 *  departureAirportId,
 *  arrivalAirportId,
 *  arrivalTime,
 *  departureTime,
 *  price ,
 *  totalSeats ->airplane
 *  
 * }
 */