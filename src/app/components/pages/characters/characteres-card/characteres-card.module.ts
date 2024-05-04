import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacteresCardComponent } from './characteres-card.component';



@NgModule({
  declarations: [CharacteresCardComponent],
  imports: [
    CommonModule
  ],
  exports:[CharacteresCardComponent] //CUALQUIER MODULO QUE USE ESTE MODULO PUEDE USAR ESTE COMPONENTES (CHARACTER CARD)
})
export class CharacteresCardModule { }
