// class use response all api
class Response {

    static get_success(message,data,code=200){
        return{success:true,message:message,data:data}
    }

    static get_error(message,data,code=500){
        return{success:false,message:message,data:data}
    }

}

module.exports = Response