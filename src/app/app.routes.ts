import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RequestsComponent } from './requests/requests.component';
import { RequestDetailComponent } from './request-detail/request-detail.component';
import { NgModule } from '@angular/core';

export const ROUTES: Routes = [
    /*{path: '', component: HomeComponent},*/
    {path: 'about', component: AboutComponent},
    {path: 'requests', component: RequestsComponent},
    {path: 'requests/:id', component: RequestDetailComponent}
];
