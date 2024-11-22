import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { CollectionComponent } from './collection.component';
import { MatIconModule } from '@angular/material/icon';
import { ToolbarComponent } from '@app/components/toolbar/toolbar.component';

const routes: Routes = [
  {
    path: ':collectionId',
    component: CollectionComponent,
  }
]
@NgModule({
  declarations: [CollectionComponent],
  imports: [CommonModule, RouterModule, MatToolbarModule, MatProgressBarModule, MatCardModule, MatIconModule, ToolbarComponent],
  exports: [CollectionComponent]
})
export class CollectionModule {

}
