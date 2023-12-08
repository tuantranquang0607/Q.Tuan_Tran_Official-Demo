import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class EmailService {
  private baseUrl = 'http://localhost:3002'; // Update with your backend server URL

  constructor(private http: HttpClient) {}

  sendEmail(mailOptions: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/submit-form`, mailOptions)
        .pipe(
            catchError(error => {
                console.error('Error sending email:', error);
                throw error;
            })
        );
    }
  
    testConnection(options: any): Observable<any> {
      return this.http.post<any>(`${this.baseUrl}/test`, options)
        .pipe(
            catchError(error => {
                  console.error('Error:', error);
                  throw error;
            })
        );
    }
>>>>>>>>> Temporary merge branch 2
}
