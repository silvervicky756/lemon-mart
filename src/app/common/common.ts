import { HttpErrorResponse } from '@angular/common/http'
import { throwError } from 'rxjs'

export function transformError(err: HttpErrorResponse | string) {
  let errorMessage: string = 'An unkown error has occured'
  if (typeof err === 'string') {
    errorMessage = err
  } else if (err.error instanceof ErrorEvent) {
    errorMessage = `Error! ${err.error.message}`
  } else if (err.status) {
    errorMessage = `Request Failed with ${err.status} ${err.statusText}`
  } else if (err instanceof Error) {
    errorMessage = err.message
  }
  return throwError(errorMessage)
}
