import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable, throwError} from "rxjs";
import { catchError } from "rxjs/operators";
import {ToastrService} from "ngx-toastr";


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((requestError: HttpErrorResponse) => {
        console.error(`Backend returned code ${requestError.status}.`);
        this.handleError(requestError);
        throw requestError;
      })
    );
  }

  private handleError(requestError: HttpErrorResponse) {
    console.log((requestError));
    if (this.isProblemDetails(requestError.error)) {
      const title=this.getTitleOfError(requestError)
      const details=requestError.error.title;
      const status=requestError.error.status;
      console.log(status)
      console.log(title)
      if (title!= ' ') {
        this.toastr.error(details,title);
      }
    }

  }

  private isProblemDetails(err: any): boolean {
    return err.hasOwnProperty("type") && err.hasOwnProperty("status") && err.hasOwnProperty("title");
  }
 private getTitleOfError(err:HttpErrorResponse):string {
   switch (err.error.status) {
     case 400: {
       return "Неверный запрос";
     }
     default:
       return "Ошибка";
   }

 }
}
