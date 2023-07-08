import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() title: string = '';
  @Input() subtitle = 'Desde 03/23';
  @Input() botaoListar = true;

  constructor(private router: Router) { }

  ngOnInit(): void {}

  listar(): void{
    this.router.navigate([`/${this.title.toLocaleLowerCase()}/lista`]);
  }
}
