import { readFile } from 'fs';
import Version from './Version';

class VssExtensionConfigParser {
    private extensionConfig: Promise<object> = this.readExtensionConfigFile();

    public async parseVersion(): Promise<Version> {
        const config = await this.extensionConfig;

        if (!config['version']) {
            throw Error('Version property must be set in vss-extension.json.');
        }

        const version = config['version'];
        return new Version(version);
    }

    private readExtensionConfigFile(): Promise<object> {
        return new Promise<object>((resolve, reject) => {
            readFile('vss-extension.json', (err, data) => {
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

export default VssExtensionConfigParser;
