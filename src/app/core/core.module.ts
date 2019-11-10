import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreService } from 'src/app/core/services/store/store.service';
import { storeReducers } from 'src/app/core/services/store/reducers';
import { AppState } from 'src/app/core/services/store/app-state';

// Initial store
function storeFactory() {
  return new StoreService<AppState>(storeReducers, {courses: []});
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    {
      provide: StoreService,
      useFactory: storeFactory
    }
  ]
})
export class CoreModule { }
