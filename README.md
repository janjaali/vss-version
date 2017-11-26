# VSS-Version

 [![CircleCI Status](https://circleci.com/gh/janjaali/vss-version.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/janjaali/vss-version)

VSS-Version provides helper functions for modifying extension manifests (i.e. `vss-extension.json`) in Visual Studio Team Services (VSTS) Extension development (https://docs.microsoft.com/de-de/vsts/extend/get-started/node).

## Install

`vss-version` is available as npm-package:

```shell
npm install --save-dev vss-version
```

## Usage

You can run `vss-version` manually or integrate its functionality as one of your package.json scripts.

```shell
vss-version --inc minor
```

### Functions

#### --inc

Increments specified version of `vss-extension.json`:

* **major** increments major version
* **minor** increments minor version
* **patch** increments patch version
* **build** increments build version
