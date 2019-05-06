import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { filter, tap } from 'rxjs/operators';
import { MessageStoreService } from './message-store.service';

export class HttpInterceptorService implements HttpInterceptor {
  constructor(private messageStore: MessageStoreService) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler) {
    const message = `Calling: ${req.url} with ${req.method}`;
    const started = Date.now();

    return next.handle(req).pipe(
      filter((event: HttpEvent<any>) => event instanceof HttpResponse),
      tap((resp: HttpResponse<any>) => this.auditResponse(resp, message, started))
    );
  }

  private auditResponse(resp: HttpResponse<any>, urlCalled: string, started: number) {
    const elapsedMs = Date.now() - started;
    const eventMessage = `${urlCalled}, received: ${resp.statusText} in ${elapsedMs} ms`;

    this.messageStore.dispatch(eventMessage);
  }
}
