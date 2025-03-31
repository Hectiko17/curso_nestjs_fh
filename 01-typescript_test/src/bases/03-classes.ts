import axios from "axios"

export class Consoles {
  

constructor(
    public id:number,
    public name:string){

   
    console.log("constructor llamado")
}

async getMoves(){
const resp = await axios.get('https://pokeapi.co/api/v2/pokemon/4');
console.log(resp.data.moves);
return resp.data.moves;


}

}
export const ps5= new Consoles(4, 'Ps5')
ps5.getMoves();