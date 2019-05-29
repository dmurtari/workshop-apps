import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';

import { Fact } from './fact.model';

@Injectable({
    providedIn: 'root'
})
export class CatFactService {
    public refresh = new ReplaySubject<void>(1);
    public catFact$ = this.refresh.pipe(
        flatMap(() => this.httpClient.get<Fact[]>(`assets/facts.json`)),
        map((res) => res[Math.floor(Math.random() * res.length)]),
    )

    constructor(
        private httpClient: HttpClient
    ) { }

    public freshFacts(): void {
        this.refresh.next();
    }
}
