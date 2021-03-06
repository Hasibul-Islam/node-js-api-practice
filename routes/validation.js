const joi = require('@hapi/joi')
//Registration Validation

const registrationValidation = data =>{
    const schema = joi.object({
        name: joi.string().min(6).required(),
        email: joi.string().min(6).required().email(),
        password: joi.string().required()
    })
    return schema.validate(data)
}

const loginValidation = data =>{
    const schema = joi.object({
        email: joi.string().min(6).required().email(),
        password: joi.string().required()
    })
    return schema.validate(data)
}

module.exports.registrationValidation = registrationValidation
module.exports.loginValidation = loginValidation

