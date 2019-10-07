// App Imports
import models from '../../models';
import serverConfig from '../../config/config';
import generator from 'generate-password';

//Imports
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { users } from './fields/query';




// Get users by ID
export async function getById(parentValue, { id }) {
  return await models.User.findOne({ where: { id } })
}

// Get all users
export async function getAll() {
  return await models.User.findAll()
}



// Delete user
export async function remove(parentValue, { id }) {
  return await models.User.destroy({ where: { id } })
}

/* MAKE BETTER VALIDATIONS BASED ON:

import Validator from 'validator';
let error ={}
if(!Validator.isEmail(email)){
    error.email = 'Email is invalid';
  }
  1. has to be an email, 2. receive two passwords one with the rewrited password 3. If they send empty required files.
   */
export async function createUser(parentValue,
  { firstname,
    middle_initial,
    lastname,
    email,
    password,
    available,
    birthday,
    first_users,
    is_admin,
    mpp,
    hire_date,
    unitId,
    cbaId,
    userTypeId,
    rangeId,
    shiftId,
    watchId,
    otPaymentId,
    banktimeId,
    complainId,
    monhr_b,
    monhr_e,
    tuehr_b,
    tuehr_e,
    wedhr_e,
    wedhr_b,
    thrhr_e,
    thrhr_b,
    frihr_e,
    frihr_b,
    sathr_e,
    sathr_b,
    sunhr_e,
    sunhr_b
  }, request) {
  let errors = {}
  const user = await models.User.findOne({ where: { email } });
  if (!user) {
    // Generate Password Random :)

    let randomPassword = generator.generate({
      length: 10,
      numbers: true

    });
    console.log(randomPassword);
//passwordHashed
    const passwordHashed = await bcrypt.hash(randomPassword, serverConfig.saltRounds);
    return await models.User.create({
      firstname,
      middle_initial,
      lastname,
      email,
      password: passwordHashed,
      available,
      birthday,
      first_users,
      is_admin,
      hire_date,
      unitId,
      cbaId,
      
    })
  } else {
    throw new Error(`The mail ${email} is already registered. Try login please.`)
  }
}

// Update password
export async function update(parentValue, { id, email, password, first_users }) {
  const passwordHashed = await bcrypt.hash(password, serverConfig.saltRounds);
  return await models.User.update(
    {
      password: passwordHashed,
      first_users,
    },
    { where: { id } }
  )
}



export async function login( email, password ) {
  const user = await models.User.findOne({ where: { email } })
  if (!user) {
    // User does not exists
    throw new Error(`We do not have any user registered with ${email} email address. Please signup.`)
  } else {
    const userDetails = user.get();
    
    // User exists
    const passwordMatch = await bcrypt.compare(password, userDetails.password)
    
    
    if (!passwordMatch) {
      // Incorrect password
      //throw new Error(`Sorry, the password you entered is incorrect. Please try again.`)
      return {
        user: null
      }
    } else {
      const userDetailsToken = {
        id: userDetails.id,
        firstname: userDetails.nombre,
        email: userDetails.email,
        tipo: userDetails.tipo,
        first_users: userDetails.first_users
      }
      return {
        user: userDetails,
        lastname: userDetails.apellido,
        firstname: userDetails.nombre,
        email: userDetails.email,
        tipo: userDetails.tipo,
        token: jwt.sign(userDetailsToken, serverConfig.secret)
      }
    }
  }
}

export async function jwtVerification(jwt){
  var user = {}
  if (jwt){
    const token = token.split(' ');
    user = jwt.verify(token[1], serverConfig.secret);
    return {
      validateToken: true,
      user: user
    }
  }else{
    validateToken= false;
    return {
      validation: validateToken
    }
  }
}
