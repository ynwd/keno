/* eslint-disable no-unused-vars */
import webpack, { Configuration, Plugin } from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

const entry: string[] = ['./src/components/index.tsx']
let mode: 'development' | 'production' | 'none' | undefined = 'production'
let plugins: Plugin[] = []

if (process.env.NODE_ENV === 'development') {
  mode = 'development'
  entry.push('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true')
  plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/templates/hmr.html'
    })
  ]
}

const config: Configuration = {
  mode,
  entry,
  devtool: 'inline-source-map',
  plugins,
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../public'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules/'
      }
    ]
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  }
}

export default config
