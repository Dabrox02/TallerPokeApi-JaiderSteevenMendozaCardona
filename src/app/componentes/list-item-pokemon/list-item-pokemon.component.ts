import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, createGesture } from '@ionic/angular';
import { PokemonService } from 'src/app/servicios/pokemon.service';

@Component({
  selector: 'app-list-item-pokemon',
  templateUrl: './list-item-pokemon.component.html',
  styleUrls: ['./list-item-pokemon.component.scss'],
})
export class ListItemPokemonComponent implements OnInit {

  pokemones: any[] = [];

  constructor(public pokemonService: PokemonService) {
  }

  ngOnInit() {
    this.getPokemones();
  }

  getPokemones(): void {
    this.pokemonService.getPokemones<any>().subscribe((data) => {
      this.pokemones.push(...data.results);
    });
  }

  onIonInfinite(ev: Event) {
    if (this.pokemonService.offset > 1300) {
      (ev as InfiniteScrollCustomEvent).target.disabled = true;
    } else {
      this.pokemonService.offset += 20;
      this.getPokemones();
      setTimeout(() => {
        (ev as InfiniteScrollCustomEvent).target.complete();
      }, 500);
    }
  }

}
