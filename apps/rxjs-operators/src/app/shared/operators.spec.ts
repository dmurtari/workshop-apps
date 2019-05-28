import { of } from 'rxjs';

import { takeEveryNth, trimWhitespace, getRandomCatFact, makeItADog } from './operators';
import { Fact } from 'apps/rxjs-operators/src/app/shared/fact.model';

fdescribe('Operators', () => {
    it('takeEveryNth should take every nth object', () => {
        const results = [];
        of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
            .pipe(takeEveryNth(4))
            .subscribe(res => results.push(res));
        expect(results).toEqual([0, 4, 8]);
    });

    it('trimWhitespace trims leading and trailing whitespace', () => {
        const results = [];
        of('hello world', ' hello world ', '       ')
            .pipe(trimWhitespace())
            .subscribe(res => results.push(res));
        expect(results).toEqual(['hello world', 'hello world', '']);
    });

    it('getRandomCatFact should get a single cat fact', () => {
        const results = [];
        const mockHttpClient = jasmine.createSpyObj('HttpClient', {
            get: of([
                { fact: 'A cat is alive' },
                { fact: 'A cat must eat to survive' }
            ])
        });

        of('')
            .pipe(getRandomCatFact(mockHttpClient as any))
            .subscribe(res => results.push(res))

        expect(results[0]).toEqual(jasmine.objectContaining({
            fact: jasmine.anything()
        }));
    });

    it('makeItADog should make it a dog', () => {
        of({ fact: 'A cat must eat to survive' } as Fact)
            .pipe(makeItADog())
            .subscribe(res => expect(res).toEqual({ fact: 'A dog must eat to survive' }))
    });
});
