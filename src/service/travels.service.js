import { idNotFound } from "../error/erros.js"
import passengerTravels from "../repository/passengersTravels.js"

 async function travelService (id){

    const repository = await passengerTravels(id)
    

    if(id>repository.lenght) throw idNotFound()

    return repository.list
}


export default travelService