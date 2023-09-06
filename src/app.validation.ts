import Joi from 'joi';

export const paginationValidator = Joi.object({
  limit: Joi.number().default(5),
  page: Joi.number().default(1),
});

export const searchTracksValidator = paginationValidator.append({
  query: Joi.string().required(),
});
