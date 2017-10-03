module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/lib',
    filename: 'index.js',
    library: 'G2Wrapper',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader'] }
    ]
  },
  externals: {
    g2: {
      root: 'G2',
      commonjs2: 'G2',
      commonjs: 'G2',
      amd: 'G2',
    },
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
  },
};
