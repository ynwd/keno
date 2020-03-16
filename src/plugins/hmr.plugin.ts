// eslint-disable-next-line no-unused-vars
import { FastifyInstance } from 'fastify'
import config from '../webpack.config'
import webpack from 'webpack'

import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
const compiler = webpack(config)

export const plugin = function (fastify: FastifyInstance, opts: never, next: Function): void {
  if (process.env.NODE_ENV === 'development') {
    fastify.use(webpackDevMiddleware(compiler, {
      publicPath: config.output?.publicPath ? config.output?.publicPath : '/'
    }))

    fastify.use(webpackHotMiddleware(compiler, {
      log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
    }))
  }
  next()
}
