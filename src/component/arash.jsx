/*
so Joi has two steps ,
one
schema = {
    username:Joi.string().require();
    password:Joi.string().require();
}

second step in our validate method
 */
validate = () => {
    const errors = Joi.validate();
}