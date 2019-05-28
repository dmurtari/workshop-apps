import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { filter } from 'rxjs/operators';

import { CatFactService } from 'apps/rxjs-operators/src/app/shared/catfact.service';

@Component({
    selector: 'workshop-demo-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public cat$ = this.githubService.catFact$;

    constructor(
        private githubService: CatFactService
    ) { }

    public ngOnInit(): void {
        this.githubService.freshFacts();

        of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9).pipe(
            filter((_, i) => i % 3 === 0)
        )
        .subscribe(res => console.log(res));
    }

    public getNewFact(): void {
        this.githubService.freshFacts();
    }
}
