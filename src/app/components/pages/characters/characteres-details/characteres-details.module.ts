import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacteresDetailsRoutingModule } from './characteres-details-routing.module';
import { CharacteresDetailsComponent } from './characteres-details.component';


@NgModule({
  declarations: [CharacteresDetailsComponent],
  imports: [
    CommonModule,
    CharacteresDetailsRoutingModule
  ]
})
export class CharacteresDetailsModule { }
