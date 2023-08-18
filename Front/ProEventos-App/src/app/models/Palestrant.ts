import { Event } from './Event';
import { RedeSocial } from './RedeSocial';

export interface Palestrant {
    id: number;
    nome: string;
    miniCurriculo: string;
    imagemURL: string;
    telefone: string;
    email: string;
    redesSociais: RedeSocial[];
    palestrantesEventos: Event[];
}
