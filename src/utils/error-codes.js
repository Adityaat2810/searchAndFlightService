const ClientErrorCodes= Object.freeze({
    BAD_REQUEST:400,
    UNAUTORISED:401,
    NOT_FOUND:404,

})


const ServerErrorCodes = Object.freeze({
    INTERNAl_SERVER_ERROR:500 ,
    NOT_IMPLEMENTED:501 ,

})

const SuccessCodes= Object.freeze({
    OK:200,
    CREATED: 201 

})


module.exports = {
    ClientErrorCodes,
    ServerErrorCodes,
    SuccessCodes
}