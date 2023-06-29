import httpStatus from "http-status";
import { idNotFound } from "../error/erros.js";
export function errorHandler(error,rq,res,next){

console.log(error)

if (error.type==="idError"){
  return  res.status(httpStatus.NOT_FOUND).send(error.message)
}

return res.status(httpStatus.INTERNAL_SERVER_ERROR).send('unxpected error :(')

}