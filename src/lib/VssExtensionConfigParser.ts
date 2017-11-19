import { readFile } from 'fs';
import { ExtensionConfig } from './ExtensionConfig';

class VssExtensionConfigParser {
    private extensionConfig: Promise<object> = this.readExtensionConfigFile();

    public async parseVersion(): Promise<string> {
        const config = await this.extensionConfig;

        if (!config['version']) {
            throw Error('Version property must be set in vss-extension.json.');
        }

        return config['version'];
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
