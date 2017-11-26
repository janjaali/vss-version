import VssExtensionConfigController from './VssExtensionConfigController';

class VssVersion {
    public static async run(args: string[]): Promise<any> {
        if (args.length < 2) {
            throw Error('Invalid command: Specify command and version (e.g. --inc minor).');
        } else if (args[0] !== '--inc') {
            throw Error(`Invalid command ${args[0]}. Try --inc.`);
        }

        const configController = new VssExtensionConfigController();
        const version = await configController.readVersion();

        const selectedTargetVersion = args[1];
        const incrementedVersion = version.increment(selectedTargetVersion);

        configController.writeVersion(incrementedVersion.toString());
    }
}

export default VssVersion;
