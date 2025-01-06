import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Mail } from '../models/mail';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  constructor(private http: HttpClient) {}

  getMails(): Observable<Mail[]> {
    return this.http
      .get<{ mails: Mail[] }>('assets/data/mails.json')
      .pipe(map((response) => response.mails));
  }

  getMailById(id: number): Observable<Mail | undefined> {
    return this.getMails().pipe(
      map((mails) => mails.find((mail) => mail.id === id))
    );
  }
}
