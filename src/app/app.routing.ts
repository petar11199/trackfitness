import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: 'app/auth/auth.module#AuthModule' },
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
  { path: 'awards', loadChildren: 'app/awards/awards.module#AwardsModule' }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);