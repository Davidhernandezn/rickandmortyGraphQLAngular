import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacteresDetailsComponent } from './characteres-details.component';

const routes: Routes = [{ path: '', component: CharacteresDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacteresDetailsRoutingModule { }
