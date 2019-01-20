const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const User = require("../models/User")
const authConfig = require("../../config/auth")
const router = express.Router();
const multer = require('multer')
const upload = multer({dest:"uploads/"})



function generateToken(params = {}){
    return jwt.sign(params,authConfig.secret, {

        expiresIn:86400
    })

}


router.post('/register',upload.single('userImage'), async (req, res) =>{
    console.log(req.file)
    
    const email   = req.body.email
    
    try{
       
        if(await User.findOne({ email }))
            return res.status(400).send({error:"Usuario ja existe"})

        const user = await User.create(req.body);
        user.password = undefined
        return res.send({
            user, 
            token: generateToken({id: user.id})
        })
    
    }catch(err){
        return res.status(400).send({error:'registration failed'})
    }
});


router.post("/authenticate", async (req, res) =>{
    const {email, password}  = req.body

        const user  = await User.findOne({email}).select('+password');

        if(!user)
            return res.status(400).send({error:"Usuario Nao cadastrado"})
            
        if(!await bcrypt.compare(password, user.password))
            return res.status(400).send({error:"Senha Invalida"})

        user.password = undefined

        res.send({
            
                user, 
                token: generateToken({id: user.id})
            
        }) 
})

router.get('/', async (req, res) =>{
    try{
        const users = await User.find();
        return res.send({users})
    }catch(err){
        return res.status(400).send({error:"falha ao carregar os cartoes"})
    }

});

module.exports = app => app.use('/login', router)
