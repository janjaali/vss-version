class VssVersion {
    public static run(args: string[]): void {
        if (args.length < 2) {
            throw Error('Invalid command: Specify command and version (e.g. --inc minor).');
        } else if (args[0] !== '--inc') {
            throw Error(`Invalid command ${args[0]}. Try --inc.`);
        } else if (this.supportedVersions.indexOf(args[1]) < 0) {
            throw Error(`Unsupported target version ${args[1]}. Supported versions: ${this.supportedVersions}`);
        }
    }

    private static supportedVersions = ['major', 'patch', 'minor', 'build'];
}

export default VssVersion;
