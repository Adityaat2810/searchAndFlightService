
const { City } = require('../models/index');
//index can return all the files in the models folder
class CityRepository{

   async createCity({ name  }){
    try{

        const city = await City.create({
            // model property name: name that has been passed
            name:name
        });
        return city;

    }catch(err){

        console.log('Something went wrong in the repository layer');
        throw {err};

    }
   }

   async deleteCity(cityId){
    try{
        await City.destroy({
            where:{
                id:cityId
            }
        });
        return true;

    }catch(err){
        console.log('Something went wrong in the repository layer');
        throw {err};
    }

   }

   async updateCity(cityId,data){

    try{
        //The nelow approach also works but will not return updated objects
        //if we are using Pg then returning true: can be used else not 
        // const city=await City.update(data,{
        //     where:{
        //         id:cityId
        //     }
        // });

        const city = await City.findByPk(cityId);
        city.name = data.name;
        await city.save();
        

        return city;

    }catch(err){

        console.log('Something went wrong in the repository layer');
        throw {err};

    }
   

   }

   async getCity(cityId){
    try{
        const city = await City.findByPk(cityId);
        return city;
    }catch(err){

        console.log('Something went wrong in the repository layer');
        throw {err};

    }

   }

   async getAllCities(){
    try{

        const cities = await City.findAll();
        return cities;
        

    }catch(error){
        console.log("error", error)
    }
   }

}

module.exports =CityRepository;


