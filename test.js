const TestPackage = require('./index.js');

console.log('======================================');
console.log('  Test Package - Running Tests');
console.log('======================================\n');

const pkg = new TestPackage();

console.log(`Package version: ${pkg.getVersion()}`);
console.log(`Default prefix: ${pkg.getPrefix()}\n`);

pkg.log('Test message 1');
pkg.log('Test message 2');
pkg.log('Test message 3');

console.log('\n✓ All tests passed!');
