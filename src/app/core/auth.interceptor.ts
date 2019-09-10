import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const authToken = 'a67432328d664561f889e4dbdd9d017f996398642bd41ce3';

        if (!authToken) {
            return next.handle(req);
        }

        const clonedRequest = req.clone({
            headers: req.headers.set('Authorization', `${authToken}`)
        });

        return next.handle(clonedRequest);

    }

}
