import { Injectable } from '@angular/core';
import { PILOTOS } from '../piloto/mock-piloto';

@Injectable({
  providedIn: 'root'
})
export class PilotoService {

  constructor() { }

  salvarPiloto() { }

  editarPiloto() { }

  listarPilotos() {
    return PILOTOS;
  }

  contarPilotos() {
    return PILOTOS.length;
  }

  visualizarPiloto() { }

  excluirPiloto() { }


}
