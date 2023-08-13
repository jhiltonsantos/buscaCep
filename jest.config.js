module.exports = {
  preset: 'react-native',
  transform: {
    '\\.(js|jsx|ts|tsx)$': [
      'babel-jest',
      { configFile: './babel.config.js' },
    ],
  },
  moduleNameMapper: {
    '^@rneui/themed$': './node_modules/@rneui/themed', // Ajuste o caminho conforme necessário
  },
};