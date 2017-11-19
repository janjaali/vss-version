import Version from '../../src/lib/Version';
import VssExtensionConfigParser from '../../src/lib/VssExtensionConfigParser';

describe('VssExtensionConfigParser', () => {
    it('parse version as string from vss-extension.json file', async () => {
        const vssExtConfParser = new VssExtensionConfigParser();
        const version = await vssExtConfParser.parseVersion();
        const expectedVersion = new Version('1.0.7.5');
        expect(version).toEqual(expectedVersion);
    });

    it('throws error if version is not set in vss-extension.json file', async () => {
        const vssExtConfParser = new VssExtensionConfigParser();
        await expect(vssExtConfParser).rejects;
    });
});
