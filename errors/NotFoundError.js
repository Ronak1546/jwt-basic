import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./CustomAPIError.js";
class notFoundError extends CustomAPIError{
    constructor(message)
    {
        super(message);
        this.statusCode =StatusCodes.NOT_FOUND;
    }
}
export default notFoundError;