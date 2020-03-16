import { Controller, Get } from 'fastify-di'
import { FastifyReply } from 'fastify'
import { Http2ServerResponse } from 'http2'

@Controller()
export class ReactController {
  @Get()
  index (request: never, reply: FastifyReply<Http2ServerResponse>): void {
    reply.view('/src/templates/react.ejs', { text: 'text' })
  }
}
