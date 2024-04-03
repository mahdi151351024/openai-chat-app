import Joi from 'joi';

const schema = Joi.object().keys({
    query: Joi.string().required()
});

const validate = (data) => {
    const result = schema.validate(data);
    result.value = data;
    return result;
};

export default validate;
