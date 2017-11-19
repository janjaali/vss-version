import VssVersion from '../../src/lib/VssVersion';

describe('VssVersion', () => {
    it('throws error for invalid commands', () => {
        expect(VssVersion.run).toThrowError();
    });
});
