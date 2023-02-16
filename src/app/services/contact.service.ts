import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactInterface, ContactInterfaceFeedbackInterface } from '../interfaces/model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private api: string = 'https://angularapi.free.beeceptor.com/api/contact-form';

  constructor(private http: HttpClient) { }

  sendContactForm(data: ContactInterface): Observable<ContactInterfaceFeedbackInterface>{
   return this.http.post(this.api, data) as Observable<ContactInterfaceFeedbackInterface>;
  }
}
