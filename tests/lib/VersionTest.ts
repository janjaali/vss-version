import Version from '../../src/lib/Version';

describe('Version', () => {
    it('constructor enforces semver version strings', () => {
        expect(() => (new Version('1.x.2.a'))).toThrowError();
    });

    describe('increment versions', () => {
        it('increment major versions', () => {
            const version = new Version('1.1.1.1');
            const incVersion = version.increment('major');
            expect(incVersion).toEqual(new Version('2.0.0.0'));
        });

        it('increment minor versions', () => {
            const version = new Version('1.1.1.1');
            const incVersion = version.increment('minor');
            expect(incVersion).toEqual(new Version('1.2.0.0'));
        });

        it('increment patch versions', () => {
            const version = new Version('1.1.1.1');
            const incVersion = version.increment('patch');
            expect(incVersion).toEqual(new Version('1.1.2.0'));

        });

        it('increment build versions', () => {
            const version = new Version('1.1.1.1');
            const incVersion = version.increment('build');
            expect(incVersion).toEqual(new Version('1.1.1.2'));
        });

        it('throws error if selected version is not supported', () => {
            const version = new Version('1.1.1.1');
            expect(version.increment).toThrowError();
        });
    });
});
