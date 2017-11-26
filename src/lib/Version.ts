class Version {
    private version: number[];

    constructor(versionString: string) {
        this.version = versionString.split('.').map(Number);

        const allNumbers = !this.version.some(isNaN);
        if (!allNumbers) {
            throw Error('Invalid version: Version is not allowed to contain not numeric values.');
        }
    }

    public increment(selectedVersion: string): Version {
        switch (selectedVersion) {
            case 'major':
                return this.incrementAtPosition(0);
            case 'minor':
                return this.incrementAtPosition(1);
            case 'patch':
                return this.incrementAtPosition(2);
            case 'build':
                return this.incrementAtPosition(3);
            default:
                throw Error(`Invalid version to increment: ${selectedVersion}.
                    Supported versions: major, minor, patch, build`);
        }
    }

    public toString(): string {
        return this.version.join('.');
    }

    private incrementAtPosition(versionPosition: number): Version {
        const version = this.version.map((v, i) => {
            if (i < versionPosition) {
                return v;
            } else if (i === versionPosition) {
                return v + 1;
            } else {
                return 0;
            }
        });

        const versionString = version.join('.');
        return new Version(versionString);
    }
}

export default Version;
