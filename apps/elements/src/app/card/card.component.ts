import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'pt-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    encapsulation: ViewEncapsulation.ShadowDom
})
export class CardComponent {

    @Input() public title: string;

    constructor() { }
}
