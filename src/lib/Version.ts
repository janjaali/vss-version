class Version {
    private version: number[];

    constructor(versionString: string) {
        this.version = versionString.split('.').map(Number);

        const allNumbers = !this.version.some(isNaN);
        if (!allNumbers) {
            throw Error('Invalid version: Version is not allowed to contain not numeric values.');
        }
    }
}

export default Version;
