import { Event } from './Event';

export interface Lote {
    id: number;
    nome: string;
    preco: number;
    dataInicio?: Date;
    quantidade: number;
    eventoId: number;
    event: Event;
}
