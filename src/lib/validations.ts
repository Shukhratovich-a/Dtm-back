import Joi from "joi";

export default {
  // admin
  adminLoginScheme: Joi.object({
    adminName: Joi.string().min(3).max(64).required(),
    adminPassword: Joi.string().min(8).max(64).required(),
  }),

  // user
  loginScheme: Joi.object({
    userName: Joi.string().min(3).max(64).required(),
    userPassword: Joi.string().min(8).max(64).required(),
  }),
  reigsterScheme: Joi.object({
    userFullName: Joi.string().min(3).max(128).required(),
    userContact: Joi.string().min(3).max(64).required(),
    userName: Joi.string().min(3).max(64).required(),
    userRegion: Joi.number().required(),
    userPassword: Joi.string().min(8).max(64).required(),
    userSex: Joi.string().valid("male", "female").required(),
  }),

  // region
  regionPostScheme: Joi.object({
    regionName: Joi.string().min(3).max(64).required(),
  }),
  regionPutScheme: Joi.object({
    regionName: Joi.string().min(3).max(64).required(),
  }),

  // science
  sciencePostScheme: Joi.object({
    scienceName: Joi.string().min(3).max(64).required(),
  }),
  sciencePutScheme: Joi.object({
    scienceName: Joi.string().min(3).max(64).required(),
  }),

  // direction
  directionPostScheme: Joi.object({
    directionName: Joi.string().min(3).max(256).required(),
    firstScienceId: Joi.number().min(1).required(),
    secondScienceId: Joi.number().min(1).required(),
  }),
  directionPutScheme: Joi.object({
    directionName: Joi.string().min(3).max(256),
    firstScienceId: Joi.number().min(1),
    secondScienceId: Joi.number().min(1),
  }),

  // direction
  quotaPostScheme: Joi.object({
    quotaContract: Joi.number().min(1).required(),
    quotaGrand: Joi.number().min(1).required(),
    quotaContractBal: Joi.number().min(1).max(189).required(),
    quotaGrandBal: Joi.number().min(1).max(189).required(),
    quotaYear: Joi.number().min(1).required(),
    directionId: Joi.number().min(1).required(),
  }),
  quotaPutScheme: Joi.object({
    quotaContract: Joi.number().min(1),
    quotaGrand: Joi.number().min(1),
    quotaContractBal: Joi.number().min(1).max(189),
    quotaGrandBal: Joi.number().min(1).max(189),
    quotaYear: Joi.number().min(1),
    directionId: Joi.number().min(1),
  }),
};
