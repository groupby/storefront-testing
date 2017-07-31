module.exports = function(wallaby) {
  return {
    env: {
      type: 'node'
    },
    testFramework: 'mocha',

    files: [
      'src/**/*.ts'
    ],
    tests: ['test/unit/**/*.ts'],
    setup() {
      require('chai').use(require('sinon-chai'))
    }
  };
};
