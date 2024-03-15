import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LoanDataService {
  constructor(private http: HttpClient) {}

  getLoanData(): Observable<any> {
    return this.http.post(
      'https://testapi.creditwallet.ng/api/v2/loan/list/active/interview',
      { page: 1 }
    );
  }

  getPageSize(pageNumber : number): Observable<any> {
    return this.http.post(
      'https://testapi.creditwallet.ng/api/v2/loan/list/active/interview',
      { page: pageNumber }
    );
  }
}
