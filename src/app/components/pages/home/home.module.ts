import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CharacteresCardModule } from '../characters/characteres-card/characteres-card.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CharacteresCardModule,//IMPORTAR PARA USAR
  ]
})
export class HomeModule { }
