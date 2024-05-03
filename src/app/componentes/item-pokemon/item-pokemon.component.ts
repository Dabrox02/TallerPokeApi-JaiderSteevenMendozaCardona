import { Component, Input, OnInit } from '@angular/core';
import { TarjetaPokemonPage } from 'src/app/paginas/tarjeta-pokemon/tarjeta-pokemon.page';

@Component({
  selector: 'app-item-pokemon',
  templateUrl: './item-pokemon.component.html',
  styleUrls: ['./item-pokemon.component.scss'],
})
export class ItemPokemonComponent implements OnInit {

  @Input() pokemon!: any;
  pageTarjetaPokemon = TarjetaPokemonPage;

  constructor() { }

  ngOnInit() {
  }

  getId(cad: string) {
    const cadSliced = cad.split("/");
    return cadSliced[6];
  }

  capitalize(cad: string){
    return cad.charAt(0).toUpperCase() + cad.slice(1, cad.length);
  }

}
