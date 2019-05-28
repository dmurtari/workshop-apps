import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from '../home/home.component';
import { homeRouting } from './home.routing';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        homeRouting
    ]
})
export class HomeModule { }
