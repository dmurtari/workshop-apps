import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { CardComponent } from 'apps/elements/src/app/card/card.component';

@NgModule({
    declarations: [
        CardComponent
    ],
    imports: [
        BrowserModule,
        NxModule.forRoot(),
    ],
    providers: [],
    bootstrap: [],
    entryComponents: [
        CardComponent
    ]
})
export class AppModule {
    constructor(
        private injector: Injector
    ) { }

    ngDoBootstrap(): void {
        const CardElement = createCustomElement(CardComponent, { injector: this.injector });
        customElements.define('pt-card', CardElement);
    }
}
