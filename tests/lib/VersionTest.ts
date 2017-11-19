import Version from '../../src/lib/Version';

describe('Version', () => {
    it('constructor enforces semver version strings', () => {
        /* tslint:disable */
        expect(() => { new Version('1.x.2.a') }).toThrowError();
        /* tslint:enable */
    });
});
