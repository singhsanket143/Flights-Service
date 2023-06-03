const { StatusCodes } = require('http-status-codes');

const info = (req, res) => {
    console.log("Req received")
    return res.status(StatusCodes.OK).json({
        success: true,
        message: 'API is live',
        error: {},
        data: {},
    });
}

module.exports = {
    info
}