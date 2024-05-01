import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacteresListComponent } from './characteres-list.component';

const routes: Routes = [{ path: '', component: CharacteresListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacteresListRoutingModule { }
