import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { CardModule } from './card/card.module';
import { HomeModule } from './home/home.module';
import { appRoutes } from './app.routing';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        appRoutes,
        BrowserModule,
        NxModule.forRoot(),
        CardModule,
        HomeModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
