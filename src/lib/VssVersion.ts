import VssExtensionConfigParser from './VssExtensionConfigParser';

class VssVersion {
    public static async run(args: string[]): Promise<any> {
        if (args.length < 2) {
            throw Error('Invalid command: Specify command and version (e.g. --inc minor).');
        } else if (args[0] !== '--inc') {
            throw Error(`Invalid command ${args[0]}. Try --inc.`);
        }

        const configParser = new VssExtensionConfigParser();
        const version = await configParser.parseVersion();

        const selectedTargetVersion = args[1];
        const targetVersion = version.increment(selectedTargetVersion);

        /* tslint:disable */
        console.log(targetVersion);
    }
}

export default VssVersion;
