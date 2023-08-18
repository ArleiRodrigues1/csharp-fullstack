import { Router } from '@angular/router';
import { Component, OnInit, TemplateRef } from '@angular/core';


import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { Event } from '../../../models/Event';

import { EventService } from '@app/services/event.service';

@Component({
  selector: 'app-events-list',
  templateUrl: 'events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  modalRef: BsModalRef;
  public events: Event[] = [];
  public eventsFilter: Event[] = [];
  displayImg = true;


  constructor(
    private eventService: EventService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.spinner.show();
    this.getEventos;
  }

  public getEventos(): void {
    this.eventService.getEventos().subscribe({
      next: (events: Event[]) => {
        this.events = events;
        this.eventsFilter = this.events;
      },
      error: () => {
        // this.spinner.hide();
        this.toastr.error('Erro ao Carregar os Eventos', 'Erro!');
      },
      complete: () => this.spinner.hide()
    });
  }

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(): void{
    this.modalRef.hide();
    this.toastr.success('O evento foi deletado com sucesso.', 'Deletado');
  }

  decline(): void{
    this.modalRef.hide();
  }

  eventsDetails(id: number): void{
    this.router.navigate([`eventos/detalhe/${id}`]);
  }
}

