import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Routes
import { PAGES_ROUTES } from './pages.routes';

//Components
import { PagesComponent } from './pages.component';

@NgModule({
  imports: [
    CommonModule,
    PAGES_ROUTES
  ],
  declarations: [
    PagesComponent
  ],
  providers: [],
  exports:[
    PagesComponent
  ]
})
export class PagesModule { }
