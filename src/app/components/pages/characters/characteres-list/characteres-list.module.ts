import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacteresListRoutingModule } from './characteres-list-routing.module';
import { CharacteresListComponent } from './characteres-list.component';


@NgModule({
  declarations: [CharacteresListComponent],
  imports: [
    CommonModule,
    CharacteresListRoutingModule
  ]
})
export class CharacteresListModule { }
