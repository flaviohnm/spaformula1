import { Injectable } from '@angular/core';
import { PILOTOS } from '../piloto/mock-piloto';

@Injectable({
  providedIn: 'root'
})
export class PilotoService {

  constructor() { }

  salvar() { }

  editar() { }

  listar() {
    return PILOTOS;
  }

  contarPilotos() {
    return PILOTOS.length;
  }

  visualizar() { }

  excluir() { }


}
