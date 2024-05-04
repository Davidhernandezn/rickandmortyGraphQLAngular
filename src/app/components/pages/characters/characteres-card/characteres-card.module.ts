import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacteresCardComponent } from './characteres-card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CharacteresCardComponent],
  imports: [
    CommonModule,
    RouterModule//PARA ENVIAR A OTRA RUTA INDICADA
  ],
  exports:[CharacteresCardComponent] //CUALQUIER MODULO QUE USE ESTE MODULO PUEDE USAR ESTE COMPONENTES (CHARACTER CARD)
})
export class CharacteresCardModule { }
