import dbConnection from "../database/database.js";
import { idNotFound } from "../error/erros.js";


async function passengerTravels(id){
    
   
        const {rows: list}= await dbConnection.query(`
            select p."fullName",t.origin,t.destination,pt.date from passengers as p
            join passenger_travels as pt
            on p.id=pt."passengerId"
            join  travels as t
            on pt."passengerId"=t.id
            where p.id=$1
        `,[id])
        const {rowCount} = await dbConnection.query(`select * from passengers`)
        console.log(rowCount)

        

        return {list:list,lenght:rowCount}
   
}


export default passengerTravels