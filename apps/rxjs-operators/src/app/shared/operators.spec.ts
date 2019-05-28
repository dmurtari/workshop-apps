import { of } from 'rxjs';

import { takeEveryNth } from './operators';

fdescribe('Operators', () => {
    it('takeEveryNth should take every nth object', () => {
        const results = [];
        of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
            .pipe(takeEveryNth(4))
            .subscribe(res => results.push(res));
        expect(results).toEqual([0, 4, 8]);
    });
});
