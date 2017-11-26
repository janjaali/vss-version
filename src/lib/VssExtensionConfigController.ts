import { readFile, writeFile } from 'fs';
import Version from './Version';

class VssExtensionConfigController {
    private readonly vssExtensionPath: string = 'vss-extension.json';

    private readonly extensionConfig: Promise<object> = this.readExtensionConfigFile();

    public async readVersion(): Promise<Version> {
        const config = await this.extensionConfig;

        if (!config['version']) {
            throw Error('Version property must be set in vss-extension.json.');
        }

        const version = config['version'];
        return new Version(version);
    }

    public async writeVersion(version: string): Promise<void> {
        const config = await this.extensionConfig;
        config['version'] = version;

        writeFile(this.vssExtensionPath, JSON.stringify(config, null, 4), (err) => {
            console.log(err);
        });
    }

    private readExtensionConfigFile(): Promise<object> {
        return new Promise<object>((resolve, reject) => {
            readFile(this.vssExtensionPath, (err, data) => {
                if (err) {
                    reject(err);
                } else if (!data) {
                    reject(new Error('vss-extension file is empty.'));
                } else {
                    resolve(JSON.parse(data.toString()));
                }
            });
        });
    }
}

export default VssExtensionConfigController;
