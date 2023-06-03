const { StatusCodes } = require('http-status-codes');

const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req, res, next) {
    if(!req.body.name) {
        ErrorResponse.message = 'Something went wrong while creating airport';
        ErrorResponse.error = new AppError(['name not found in the oncoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    if(!req.body.code) {
        ErrorResponse.message = 'Something went wrong while creating airport';
        ErrorResponse.error = new AppError(['Airport code not found in the oncoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    if(!req.body.cityId) {
        ErrorResponse.message = 'Something went wrong while creating airport';
        ErrorResponse.error = new AppError(['City Id not found in the oncoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    next();
}


function validateUpdateRequest(req, res, next) {
    const bodyReq = req.body;
    if(!bodyReq.name && !bodyReq.code && !bodyReq.cityId && !bodyReq.address) {
        ErrorResponse.message = 'Something went wrong while updating the airport';
        ErrorResponse.error = new AppError(['None of the parameters (name, code, cityId and address) found in the oncoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    next();
}

module.exports = {
    validateCreateRequest,
    validateUpdateRequest
}