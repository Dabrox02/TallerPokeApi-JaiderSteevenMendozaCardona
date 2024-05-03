import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscadorComponent } from './buscador/buscador.component';
import { IonicModule } from '@ionic/angular';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { ListItemPokemonComponent } from './list-item-pokemon/list-item-pokemon.component';
import { ItemPokemonComponent } from './item-pokemon/item-pokemon.component';

@NgModule({
  declarations: [
    EncabezadoComponent,
    BuscadorComponent,
    ListItemPokemonComponent,
    ItemPokemonComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot()
  ],
  exports: [
    EncabezadoComponent,
    BuscadorComponent,
    ListItemPokemonComponent,
    ItemPokemonComponent
  ]
})
export class ComponentesModule { }
