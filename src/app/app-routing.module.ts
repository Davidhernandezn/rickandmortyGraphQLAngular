import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//DEFINIR RUTAS
const routes: Routes = [
  { path:  '', redirectTo: 'character-list', pathMatch:'full'},
  { path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) }, 
  { path: 'episodes', loadChildren: () => import('./components/pages/episodes/episodes.module').then(m => m.EpisodesModule) },
  { path: 'character-list', loadChildren: () => import('./components/pages/characters/characteres-list/characteres-list.module').then(m => m.CharacteresListModule) }, 
  { path: 'character-details/:id', loadChildren: () => import('./components/pages/characters/characteres-details/characteres-details.module').then(m => m.CharacteresDetailsModule) }, 
  { path: 'about', loadChildren: () => import('./components/pages/about/about/about.module').then(m => m.AboutModule) },
  { path: '**', loadChildren: () => import('./components/pages/notFound/not-found/not-found.module').then(m => m.NotFoundModule) }
];
//PATH ** POR SI NINGUNA RUTA SE CUMPLE
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
