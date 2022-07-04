import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

interface BookGrpcService {
  findOne({ id: number }): Observable<any>;
}

@Injectable()
export class AppService {
  private bookGrpcService: BookGrpcService;
  constructor(@Inject('BOOK_PACKAGE') private client: ClientGrpc) { }

  private onModuleInit() {
    this.bookGrpcService = this.client.getService<BookGrpcService>('BookService');
  }

  async findOne(id: number) {
    return await this.bookGrpcService.findOne({ id }).toPromise();
  }
}
