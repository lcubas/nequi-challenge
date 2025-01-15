import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type Response<T> = {
  data: T;
  path: string;
  message?: string;
  statusCode: number;
  timestamp: string;
};

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    return next
      .handle()
      .pipe(map((response: T) => this.responseHandler(response, context)));
  }

  private responseHandler(data: T, context: ExecutionContext): Response<T> {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const statusCode = response.statusCode;

    return {
      data,
      statusCode,
      path: request.url,
      timestamp: new Date().toISOString(),
    };
  }
}
