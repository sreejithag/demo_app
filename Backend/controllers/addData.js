const Data = require("../models/data");

exports.add = async (req,res,next)=>{
    try{

        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const useremail = req.body.email;
        const phone = req.body.phone;
        const experiance = req.body.experiance;
        const intro = req.body.intro;
        const achivements = req.body.achivements;
        

        if(!firstname || !lastname || !useremail ||  !phone || !experiance || !intro || !achivements){
            return res.status(400).json({
                data: 'invalid input'
            })
        }


      const isUserExists = await Data.findOne({
          email:useremail
      })

     if(isUserExists){
        return res.status(400).json({
            success:false,
            data: 'User already exists'
        })
     }


     const newdata = new Data({
         firstname:firstname,
         lastname:lastname,
         email:useremail,
         phone:phone,
         intro:intro,
         achivements:achivements,
         experiance:experiance
     })

     const savedData = await  newdata.save();

     if(savedData){
         return res.status(200).json({
             success:true,
             data:savedData
         })
     }else{
        return res.status(500).json({
            data:'Not saved'
        })

     }

    }catch(error){
        next(error);
    }
}