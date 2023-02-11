const router=require('express').Router()
const cloudinary=require ("../utils/cloudinary");
const upload=require("../utils/multer");
const {images}=require("../um")
router.post("/", upload.single("image"),async(req,res )=>{
    try {
        //console.log(req.body.image);
         const result=await cloudinary.uploader.upload(req.file.path);
         const image=new images({

            cat:req.body.cat,
            deposit:req.body.deposit,
            rat:0,
            pno:req.body.pno,
            min:req.body.min,
            desc:req.body.desc,
            avatar:result.secure_url,
            cloudinary_id:result.public_id
         });
         
        console.log(req.body.cat)
        await image.save();
         res.redirect("/index")
            //res.json(image);
    } catch (error) {
        console.log(error)
    }
});

module.exports=router