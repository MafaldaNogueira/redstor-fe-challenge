import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoComponent } from './photo.component';
import { ToolbarComponent } from '@app/components/toolbar/toolbar.component';
import { CollectionComponent } from '@app/components';

const routes: Routes = [
  {
    path: ':collectionId/photo/:photoId',
    component: PhotoComponent,
  }
]
@NgModule({
  declarations: [PhotoComponent],
  imports: [CommonModule, RouterModule, MatToolbarModule, MatProgressBarModule, MatCardModule, MatIconModule, ToolbarComponent],
  exports: [PhotoComponent]
})
export class PhotoModule {}
