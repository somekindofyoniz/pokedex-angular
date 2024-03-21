import { Injectable } from '@angular/core';
import { Resultado } from '../interfaces/pokeapi';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  async getByPage():Promise<Resultado[]>{
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=20")
    const restJson = await res.json()
    if (restJson.results.length > 0) return restJson.results
    return []
  }

  async getById(id:string){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const restJson = await res.json()
    if (restJson.results.length > 0) return restJson.results
    return []
  }

  getDescription(){

  }

}
