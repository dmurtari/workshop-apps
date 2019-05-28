import { ModuleWithProviders } from '@angular/compiler/src/core';
import { RouterModule } from '@angular/router';

export const appRoutes: ModuleWithProviders = RouterModule.forRoot([
    {
        path: '',
        loadChildren: './home/home.module#HomeModule'
    }
])
