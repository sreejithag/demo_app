const Data = require("../models/data");


exports.getAllinfo = async (req,res,next)=>{
    try{

        const allData = await Data.find({});

        if(allData){

            return res.status(200).json({
                data : allData,
            })

        }else{

            return res.status(404).json({
                data : 'Not found'
            })
        }


    }catch(error){
        next(error);
    }
}

exports.isUserExists = async (req,res,next)=>{
    try{

        const email = req.query.email;

        if(!email){
            return res.status(400).json({
                data : 'Email required'
            })
        }

        const exists = await Data.findOne({
            email:email
        })

        if(exists){
            return res.status(200).json({
                data : true
            })
        }


        return res.status(200).json({
                data : false
              })


    }catch(error){
        next(error);
    }
}

exports.getDetails = async (req,res,next)=>{
    try{
        const email = req.query.email;

        const data = await Data.findOne({
            email:email
        })

        if(!data){
            return res.status(404).json({
                data : 'Not found'
            })
        }

        return res.status(200).json({
            data:data
        })


    }catch(error){
        next(error);
    }
}