const { response } = require('express');
const cityService = require('../services/city-service')

const CityService = new cityService();

/**
 *POST
 *data ->req.body
 */

const create = async (req ,res) =>{

    try{
         const city = await CityService.createCity(req.body);
         return res.status(201).json({
            data:city ,
            success:true ,
            message:'successfuly created a city',
            err:{}
         })

    }catch(error){
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to create a city',
            err:error

        })
    }

}
// Delete -> city/:id

const destroy = async (req,res)=>{
    try{

        const city = await CityService.deleteCity(req.params.id);
        return res.status(200).json({
           data:response ,
           success:true ,
           message:'successfuly deleted a city',
           err:{}
        })

    }catch(error){
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to delete a city',
            err:error

        })
    }

}

//Get -> /city/:id
const get = async (req,res) =>{
    try{

        const city = await CityService.getCity(req.params.id);
        return res.status(200).json({
           data:response ,
           success:true ,
           message:'successfuly fetched a city',
           err:{}
        })

    }catch(error){
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to get a city',
            err:error

        })
    }

}

//Patch -> /city/:id -> req.body
const update =async (req,res) =>{
    try{


        const city = await CityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
           data:response ,
           success:true ,
           message:'successfuly fetched a city',
           err:{}
        })

    }catch(error){
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to update a city',
            err:error

        })
       
    }

}

const getAll= async(req,res)=>{
    try{
        const cities = await CityService.getAllCities();
        return res.status(200).json({
            data:cities,
            success:true,
            message:"successfully fetched the city ",
            err:{}
        })
        ;

    }catch(error){
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to fetch a city',
            err:error

        })

    }
}

module.exports ={
    create ,
    destroy ,
    get ,
    update ,
    getAll
}