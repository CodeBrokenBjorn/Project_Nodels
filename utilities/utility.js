function formatErrorResponse(res, code, message){
    const err = {
        error:{
            status: code,
            message: message,
            
        },
    };
    return res.status(code).send(err);
C
}
module.exports = {formatErrorResponse};
