import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolbarComponent } from '@app/components/toolbar/toolbar.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes),
    RouterModule, MatToolbarModule, MatProgressBarModule, MatCardModule, ToolbarComponent, HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule {}
