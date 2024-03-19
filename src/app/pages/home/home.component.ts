import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FotoPokemonComponent} from '../../components/foto-pokemon/foto-pokemon.component'
import { TarjetaPokemonComponent } from '../../components/tarjeta-pokemon/tarjeta-pokemon.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FotoPokemonComponent, TarjetaPokemonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
