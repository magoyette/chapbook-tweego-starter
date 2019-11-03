const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  mode: 'production',
  // Two entries are necessary because the styles aren't linked to the JavaScript files
  entry: ['./src/scripts/index.js', './src/styles/styles.scss'],
  output: {
    path: path.resolve(__dirname, 'dist/chapbook'),
    filename: 'scripts.bundle.js'
  },
  module: {
    rules: [
      {
        // pre indicates eslint will check files before the Babel transpilation
        enforce: 'pre',
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        loader: 'eslint-loader',
        options: {
          // Set to true to prevent build from failing on errors
          emitWarning: false
        }
      },
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                debug: false
              }]
            ]
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
  // Configure mini-css-extract-plugin to extract the CSS in a single file
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.bundle.css'
    }),
    new StylelintPlugin({
      context: 'src/styles',
      // Set to true to prevent build from failing on errors
      emitWarning: false
    })
  ]
};
