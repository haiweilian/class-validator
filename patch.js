const fs = require('fs');

fs.writeFileSync(
  '/opt/hostedtoolcache/node/23.0.0/x64/lib/node_modules/codecov/lib/codecov.js',
  fs.readFileSync('./codecov.js', 'utf-8')
);
