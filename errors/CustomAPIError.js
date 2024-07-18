//class name first letter capital
//throw ,instanceof
//error class userdefined name in capital
class CustomAPIError extends Error{
    constructor(message,statusCode)
    {
        super(message);
        //this.statusCode=statusCode;
    }
}
export default CustomAPIError;