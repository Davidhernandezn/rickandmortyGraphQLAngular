import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacteresListRoutingModule } from './characteres-list-routing.module';
import { CharacteresListComponent } from './characteres-list.component';
import { CharacteresCardModule } from '../characteres-card/characteres-card.module';


@NgModule({
  declarations: [CharacteresListComponent],
  imports: [
    CommonModule,
    CharacteresListRoutingModule,
    CharacteresCardModule//importar para usarlo
  ]
})
export class CharacteresListModule { }
