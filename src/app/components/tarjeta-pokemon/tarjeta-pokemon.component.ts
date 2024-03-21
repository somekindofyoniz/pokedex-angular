import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Resultado } from '../../interfaces/pokeapi';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-tarjeta-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarjeta-pokemon.component.html',
  styleUrl: './tarjeta-pokemon.component.scss'
})
export class TarjetaPokemonComponent implements OnChanges{

  constructor(private pokemonService: PokemonService){}

  ngOnChanges(): void {
    this.extraerInfo()
  }
 
  @Input()data?:Resultado;
  id:string = "0";
  extraerInfo(){
    if(this.data){
      this.id = this.data.url.substring(34,this.data.url.length-1)
      //this.pokemonService.getById(this.id)
    }
  }
}
