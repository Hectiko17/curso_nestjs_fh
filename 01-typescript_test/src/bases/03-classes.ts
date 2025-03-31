import axios from "axios"
import { PokeapiResponse } from '../interfaces/pokeapi-response.interface';

export class Consoles {
    constructor(
        public id: number,
        public name: string
    ) {
        console.log("constructor llamado")
    }

    async getMoves() {
        try {
            const resp = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
            return resp.data.moves;
        } catch (error) {
            console.error('Error fetching Pokemon data:', error);
            return [];
        }
    }
}

export const ps5 = new Consoles(4, 'Ps5');
ps5.getMoves();