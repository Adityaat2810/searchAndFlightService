const {FlightRepository, AirplaneRepository} = require('../repository/index')
const {compareTime} =require('../utils/helper')
class FlightService{

    constructor(){
        this.airplaneRepository=new AirplaneRepository()
        this.flightRepository= new FlightRepository()
    }

    async createFlight(data){
        try{

            //console.log(data)

            // if(!compareTime(data.arrivalTime,data.departureTime)){
            //     throw {error:"arrival time can not be less than departure time"}
            // }

            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
          
            const flight = await this.flightRepository.createFlight({...data,totalSetsAvailable:airplane.capacity
            });

            return flight ;

        }catch(error){

            console.log("something went wrong at service layer");
            throw{error};

        }
    }

    async getAllFlights(data) {
        try {
          const flight = await this.flightRepository.getAllFlight(data);
          return flight;
        } catch (error) {
          console.log("There is something wrong in service layer");
          throw { error };
        }
      }
    
      async getFlight(flightId) {
        try {
          const flight = await this.flightRepository.getFlight(flightId);
          console.log("service")
          console.log(flight)
          return flight;
        } catch (error) {
          console.log("There is something wrong in service layer");
          throw { error };
        }
      }

      async updateFlight(flightId,data){
        try{

          const flight = await this.flightRepository.updateFlights(flightId,data);
          return flight;

        }catch(error){
          console.log("There is something wrong in service layer");
          throw { error };
        }
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