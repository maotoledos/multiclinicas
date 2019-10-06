import Validator from 'validator';
import _ from 'lodash'

export default function validateInput(data){
    let errors ={}
    
    if(Validator.isEmpty(data.email)){
        errors.email = 'This field is required'
    }
    if(Validator.isEmpty(data.firstname)){
        errors.firstname = 'Firstname field is required'
    }
    if(Validator.isEmpty(data.password)){
        errors.password = 'Password field is required'
    }
    if(!Validator.isEmail(data.email)){
        errors.email = 'This field is not an email'
    }    
    return{
        errors,
        isValid: _.isEmpty(errors)
    }
}