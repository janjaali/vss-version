import VssVersion from '../../src/lib/VssVersion';

describe('VssVersion', async () => {
    it('throws error for invalid commands', () => {
        expect(VssVersion.run).rejects.toThrowError();
    });
});
