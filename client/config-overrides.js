const { addBabelPlugins } = require('react-app-rewired');

const rootImportConfig = [
  'root-import',
  {
    rootpathPrefix: '~',
    rootPathSurfix: 'src',
  },
];

module.exports = config => addBabelPlugins(rootImportConfig, config);
