import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Mail } from 'src/app/models/mail';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css'],
})
export class MailComponent implements OnInit {
  mails!: Mail[];
  personnages: any;

  constructor(private mailService: MailService, private http: HttpClient) {}

  ngOnInit(): void {
    this.mailService.getMails().subscribe((mails) => {
      this.mails = mails;
    });

    this.http.get('assets/data/personnages.json').subscribe((data: any) => {
      this.personnages = data.personnages;
    });
  }

  getExpediteurName(id: number): string {
    const expediteur = this.personnages?.find((p: any) => p.id === id);
    return expediteur ? `${expediteur.prenom} ${expediteur.nom}` : '';
  }
}
