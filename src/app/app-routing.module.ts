import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacteresListModule } from './components/pages/characters/characteres-list/characteres-list.module';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) }, { path: 'episodes', loadChildren: () => import('./components/pages/episodes/episodes.module').then(m => m.EpisodesModule) }, { path: 'not', loadChildren: () => import('./components/pages/notFound/not-found/not-found.module').then(m => m.NotFoundModule) }, { path: 'character-list', loadChildren: () => import('./components/pages/characters/characteres-list/characteres-list-routing.module').then(m => m.CharacteresListRoutingModule) }, { path: 'character-list', loadChildren: () => import('./components/pages/characters/characteres-list/characteres-list.module').then(m => m.CharacteresListModule) }, { path: 'character-details', loadChildren: () => import('./components/pages/characters/characteres-details/characteres-details.module').then(m => m.CharacteresDetailsModule) }, { path: 'about', loadChildren: () => import('./components/pages/about/about/about.module').then(m => m.AboutModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
