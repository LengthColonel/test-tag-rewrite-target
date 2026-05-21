/**
 * Test Package - Clean Version
 * This is the legitimate version of the package
 */

class TestPackage {
  constructor(options = {}) {
    this.prefix = options.prefix || '[TEST]';
    this.verbose = options.verbose || false;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`${this.prefix} [${timestamp}] ${message}`);
  }

  getPrefix() {
    return this.prefix;
  }

  getVersion() {
    return '1.0.0';
  }
}

module.exports = TestPackage;
