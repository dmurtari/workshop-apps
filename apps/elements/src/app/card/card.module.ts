import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { CardComponent } from '../card/card.component';

@NgModule({
    declarations: [CardComponent],
    entryComponents: [CardComponent]
})
export class CardModule {
    constructor(
        injector: Injector
    ) {
        const CardElement = createCustomElement(CardComponent, { injector: injector });
        customElements.define('pt-card', CardElement);
    }
}
