const Joi = require("joi");

const validator = (schema) => (paylaod) =>
  schema.validate(paylaod, { abortEarly: false });

const numberschema = Joi.object({
  number_1: Joi.number().required(),
  number_2: Joi.number().required(),
});

exports.validateNumber = validator(numberschema);
