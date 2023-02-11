const router1=require('express').Router()
const cloudinary=require ("../utils/cloudinary");
const upload=require("../utils/multer");
const {images1}=require("../um1")
router1.post("/", upload.single("image"),async(req,res )=>{
    try {
        //console.log(req.body.image);
         const result=await cloudinary.uploader.upload(req.file.path);
         const image=new images1({
            cat:req.body.cat,
            loc:req.body.loc,
            wage:req.body.wage,
            desc:req.body.desc,
            avatar:result.secure_url,
            cloudinary_id:result.public_id
         });
         console.log(req.body.cat)
        //  if(req.body.cat=="Laptop"){
        //      res.redirect("/leaselaptop");
        //  }
          
         await image.save();
         res.redirect("/pserv");
    
    } catch (error) {
        console.log(error)
    }
});

module.exports=router1