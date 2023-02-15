import { HttpClient, HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';

import { LandingComponent } from './app/home/landing/landing.component';

const routes: Routes = [
  {
    path: '**',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: LandingComponent
  }
];

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes, {useHash: true})),
  ],
}).catch(err => console.error(err));