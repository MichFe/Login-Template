import { RouterModule, Routes  } from '@angular/router';

//Components
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes =[
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes,  { useHash: false } );