import { Component, OnInit, inject, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ICollection } from '@app/interfaces';
import { UnsplashService } from '@app/services';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterLink } from '@angular/router';
import { ToolbarComponent } from '@app/components/toolbar/toolbar.component';
import { Subscription } from 'rxjs';
import { MatButton } from '@angular/material/button';

// toDo Transform this module in a standalone component - done
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatProgressBarModule, RouterLink, ToolbarComponent, MatButton],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {
  readonly unsplashService: UnsplashService = inject(UnsplashService);
  private subscription: Subscription | null = null;
  // toDo Why the changes are not reflected in the UI? - done
  isLoading: boolean = false;
  collections: ICollection[] = [];
  loadMoreItems: boolean = false;
  currentPage: number = 1;
  pageSize: number = 10;
  totalCollections: number = 0;
  isLoadingMoreItems: boolean = false;
  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    // toDo Improve this call using the store (ngrx)
    this.onGetCollections();

    // toDo Is there another way to do this operation?
    // toDo Could we add a pagination? standby

  }

  onGetCollections(loadMoreItems: boolean = false) {
    this.isLoading = true;
    this.subscription = this.unsplashService.listCollections(this.currentPage, this.pageSize)
      .subscribe(collections => {
        if (collections.response?.results) {
          this.collections = loadMoreItems
            ? [...this.collections, ...collections.response.results]
            : collections.response?.results;
          this.totalCollections = collections.response?.total || 0
        }

        this.isLoading = !loadMoreItems;
        this.isLoadingMoreItems = loadMoreItems;
        this.cdr.markForCheck();
      });
  }

  onLoadMore(): void {
    this.currentPage++;
    this.onGetCollections(true);
  }

  // toDo What's happening with this subscription in case the component is destroyed? done
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
