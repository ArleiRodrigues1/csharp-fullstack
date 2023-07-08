import { Component, TemplateRef } from '@angular/core';


import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

import { EventoService } from '../../../services/Evento.service';
import { Evento } from 'src/app/models/Evento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evento-lista',
  templateUrl: './evento-lista.component.html',
  styleUrls: ['./evento-lista.component.scss']
})
export class EventoListaComponent {
  public eventos: Evento[] = [];
  public eventosFiltrados: Evento[] = [];

  public mostrarImg: boolean = true;
  private _filtroLista: string = '';

  modalRef = {} as BsModalRef;

  public get filtroLista(): string{
    return this._filtroLista;
  }

  public set filtroLista(value: string) {
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista): this.eventos;
  }

  public filtrarEventos(filtrarPor: string): Evento[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: any) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
      evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
      evento.dataEvento.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    )
  }

  constructor(
    private eventoService: EventoService,
    private modalService: BsModalService,
    private toastrService: ToastrService,
    private router: Router
    ) {}

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public confirm(): void {
    this.modalRef.hide();
    this.toastrService.success("O evento foi deletado com sucesso")
  }

  public decline(): void {
    this.modalRef.hide();
  }

  ngOnInit(): void{
    this.getEventos();
  }

  public alterarImg() : void{
    this.mostrarImg = !this.mostrarImg;

  }

 public getEventos(): void  {
  this.eventoService.getEventos().subscribe({
    next: (eventos: Evento[]) => {
      this.eventos = eventos;
      this.eventosFiltrados = this.eventos;
    },
    error: (error: any) => console.log(error)
  });
 }

 public detalheEvento(id: number) : void{
  this.router.navigate([`evento/detalhe/${id}`]);
 }

}
