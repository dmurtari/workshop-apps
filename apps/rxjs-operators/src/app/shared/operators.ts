import { HttpClient } from '@angular/common/http';
import { OperatorFunction } from 'rxjs';

import { Fact } from 'apps/rxjs-operators/src/app/shared/fact.model';

/**
 * Emits every `n`th value
 *
 * @export
 * @param {number} n
 * @returns
 */
export function takeEveryNth(n: number) {
    // TODO: Implement
    return null;
}

/**
 * Trims leading and trailing whitespace from the source observable
 *
 * @export
 * @returns
 */
export function trimWhitespace() {
    // TODO: Implement
    return null;
}

export function getRandomCatFact(httpClient: HttpClient): OperatorFunction<any, Fact> {
    // TODO: Implement
    return null;
}

export function makeItADog() {
    // TODO: Implement
    return null;
}
