import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from '../home/home.component';
import { homeRouting } from './home.routing';
import { CardModule } from 'apps/elements/src/app/card/card.module';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        homeRouting,
        CardModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class HomeModule { }
