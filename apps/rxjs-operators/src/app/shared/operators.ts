import { map, flatMap, filter, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Fact } from 'apps/rxjs-operators/src/app/shared/fact.model';
import { OperatorFunction, Observable } from 'rxjs';

/**
 * Emits every `n`th value
 *
 * @export
 * @param {number} n
 * @returns
 */
export function takeEveryNth(n: number) {
    // TODO: Implement
    return filter((_, i) => i % n === 0);
}

/**
 * Trims leading and trailing whitespace from the source observable
 *
 * @export
 * @returns
 */
export function trimWhitespace() {
    // TODO: Implement
    return map((_: string) => _.trim());
}

export function getRandomCatFact(httpClient: HttpClient): OperatorFunction<any, Fact> {
    return flatMap(() => httpClient.get<Fact[]>(`assets/facts.json`)
        .pipe(
            map((res) => res[Math.floor(Math.random() * res.length)])
        )
    )
}

export function makeItADog() {
    return (source: Observable<Fact>) => new Observable<Fact>(
        subscriber => {
            return source.subscribe({
                next: v => subscriber.next({
                    ...v,
                    fact: v.fact.replace(/cat/gi, 'dog')
                }),
                error: e => subscriber.error(e),
                complete: () => subscriber.complete()
            })
        }
    )
}
