import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, CollectionComponent, PhotoComponent } from './components';

// toDo How could we improve this routing? done

const routes: Routes = [
  { path: '', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },

  {
    path: 'collection',
    loadChildren: () => import('./components/collection/collection.module').then(m => m.CollectionModule)
  },
  {
    path: 'collection',
    loadChildren: () => import('./components/photo/photo.module').then(m => m.PhotoModule)
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
