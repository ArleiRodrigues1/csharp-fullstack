import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})

export class EventosComponent  implements OnInit {

  public eventos: any ;

  constructor(private http: HttpClient) {}

  ngOnInit(): void{
    this.getEventos();
  }

  public getEventos(): void {
    this.http.get('https://localhost:7179/api/eventos').subscribe({
      next: res => this.eventos = res,
      error: err => console.error(err)
    })
  }
}
