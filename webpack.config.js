/**
 * Copyright 2020 Nueve Solutions LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var CopyPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
  mode: 'development',
  target: 'web',
  devtool: 'cheap-module-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  plugins: [
    new CopyPlugin([{ from: '.', to: '../dist' }], { context: 'public' })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  entry: {
    background: path.resolve(__dirname, 'src/background.ts'),
    contentScript: path.resolve(__dirname, 'src/contentScript.ts'),
    devtools: path.resolve(__dirname, 'src/devtools.ts'),
    injectible: path.resolve(__dirname, 'src/injectible.ts'),
    panel: path.resolve(__dirname, 'src/panel.tsx')
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              [
                '@babel/preset-env',
                {
                  corejs: 3,
                  useBuiltIns: 'entry',
                  targets: {
                    node: '6'
                  }
                }
              ],
              ['@babel/preset-react', {}],
              ['@babel/preset-typescript', {}]
            ],
            plugins: [
              [
                '@babel/plugin-proposal-decorators',
                { legacy: true },
                'optional'
              ],
              [
                '@babel/plugin-proposal-class-properties',
                { loose: true },
                'decorators'
              ],
              [
                '@babel/plugin-proposal-optional-chaining',
                {},
                'optional-chaining'
              ]
            ]
          }
        }
      }
    ]
  }
};
