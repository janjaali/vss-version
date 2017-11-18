#!/usr/bin/env node

import VssVersion from './VssVersion';

const args = process.argv.slice(2);
VssVersion.run(args);
