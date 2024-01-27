const CrudeRepository = require('./crud-repository');
const{Airport} =require('../models/index')

class AirportRepository extends CrudeRepository{
    constructor(){
        super(Airport);
    }
}

module.exports =AirportRepository