import express from 'express';

//app import 
import {login} from '../schema/users/resolvers'

let router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body);
    
    const { identifier, password } = req.body;
    login(identifier, password)
    .then((loginData)=>{
        if (loginData.user){
            console.log(loginData.token);
            
            res.json({token: loginData.token})
        }else{
            res.status(401).json({errors: {form:'Invalid Credentials'}})
        }
    })


    

});



export default router;
