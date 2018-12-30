import { Routes, RouterModule } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { LoginGuardGuard } from "../services/guards/login-guard.guard";

const pagesRoutes: Routes = [
  {
    path: "",
    component: PagesComponent,
    canActivate:[ LoginGuardGuard ],
    children: [
        { path: "dashboard", component: PagesComponent }
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);