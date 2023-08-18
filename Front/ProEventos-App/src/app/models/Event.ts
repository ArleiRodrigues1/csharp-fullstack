import { Lote } from './Lote';
import { RedeSocial } from './RedeSocial';
import { Palestrant } from './Palestrant';

export interface Event {
    id: number;
    local: string;
    dataEvento?: Date;
    tema: string;
    qtdPessoas: number;
    imagemURL: string;
    telefone: string;
    email: string;
    lotes: Lote[];
    redesSociais: RedeSocial[];
    palestranteEventos: Palestrant[];
}
