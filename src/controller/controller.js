
import travelService from "../service/travels.service.js";

async function controller (req,res){
    const {id} =req.params

        const service = await travelService(id)
        console.log(service)
        res.send(service).status(200)
   

}


export default controller