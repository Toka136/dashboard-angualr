import { Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/form/form.component';
import { DashComponent } from './components/dash/dash.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { BigComponent } from './components/big/big.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {
        path:"dashboard",
        component:DashComponent
    },
    {
        path:"table",
        component : TableComponent
    },
    {
        path:"form",
        component:FormComponent
    },
    {
        path:"",
        pathMatch:'full',
        redirectTo:"dashboard"
    },
    {
        path:"**",
        component:NotFoundComponent
    }
];
