const router = require('express').Router();
const User = require('../modules/User');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const {
    verifyToken,
    verifyTokenAndAdmin,
    verifyTokenAndAuthorization,
} = require(".././middelware/middelware");

router.post('/register', async(req ,res) =>{
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            password: hashedPass,
            isAdmin : req.body.isAdmin


        })
        const user = await newUser.save();
        res.status(200).json(user);

    }catch(err){
        console.log(err)
        res.status(500).json(err);

    }

})

router.post('/login', async(req ,res) =>{  
    try{
        const {username , password} = req.body
        const user = await User.findOne({username : username})
        !user && res.status(400).json("Wrong  email!");
    
        const validated = await bcrypt.compare(password, user.password);
        !validated && res.status(400).json("Wrong password!");
    
    
        /// accses token
        const accsesToken = jwt.sign({id: user._id, isAdmin: user.isAdmin,},"secret")
        res.status(200).json({
            username: user.username,
            password : user.password,
            isadmin: user.isAdmin,
            id: user._id,
            accsesToken: accsesToken, 
            photo : user.photo
       })
    
    
    
    }catch(err){
        res.status(500).json(err);
    
    }

})

router.get('/getUsers' , verifyToken,async(req,res) =>{
    try{
        const products = await User.find()
        res.status(200).send(products);


    }catch(err){
        
        res.status(500).send(err);

    }

})
router.delete('/deleteUser',verifyToken,async(req,res) =>{
    try{

        console.log(req.body.postid)
        const product = await User.findByIdAndDelete(req.body.postid)
        
        res.status(200).json(product)
  
    }catch(err){
        console.log(err)
        res.status(500).json(err);

    }
})

router.put("/updateuser/:id", verifyTokenAndAuthorization, async (req, res) => {
    if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }

});


module.exports = router;