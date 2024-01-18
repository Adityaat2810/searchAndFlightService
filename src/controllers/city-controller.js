const { response } = require('express');
const cityService = require('../services/city-service')

const cityService = new cityService();

/**
 *POST
 *data ->req.body
 */

const create = async (req ,res) =>{

    try{
         const city = await cityService.createCity(req.body);
         return res.status(201).json({
            data:city ,
            success:true ,
            message:'successfuly created a city',
            err:{}
         })

    }catch(error){
        console.log(err)
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

        const city = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
           data:response ,
           success:true ,
           message:'successfuly deleted a city',
           err:{}
        })

    }catch(err){
        console.log(err)
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

        const city = await cityService.getCity(req.params.id);
        return res.status(200).json({
           data:response ,
           success:true ,
           message:'successfuly fetched a city',
           err:{}
        })

    }catch(err){
        console.log(err)
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


        const city = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
           data:response ,
           success:true ,
           message:'successfuly fetched a city',
           err:{}
        })

    }catch(err){
        console.log(err)
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to update a city',
            err:error

        })
       
    }

}

module.exports ={
    create ,
    destroy ,
    get ,
    update 
}