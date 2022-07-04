import { Metadata, ServerUnaryCall, ServerWritableStream } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod, GrpcStreamMethod, } from '@nestjs/microservices';

type IBook = { id: number, title: string }
@Controller()
export class AppController {
  items = [
    { id: 1, title: 'John' },
    { id: 2, title: 'Doe' },
  ];

  constructor() { }

  @GrpcMethod('BookService', 'FindOne')
  findOne(data: { id: number }, metadata: Metadata, call: ServerUnaryCall<any, any>): IBook {
    return this.items.find(({ id }) => id === data.id);
  }
  @GrpcStreamMethod('BookService', 'FindAll')
  findAll(requestStream: any, metadata: any, call: ServerWritableStream<any, any>): any {
    call.once('data', msg => {
      console.info('msg')
      this.items.forEach(t => call.write(t))
    })
    // call.pipe()
    // requestStream.on('data', message => {
    //   console.log('hey');
    //   requestStream.write({
    //     reply: 'Hello, world!'
    //   });
    // });
  }
}