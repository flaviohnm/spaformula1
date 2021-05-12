import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-botoes',
  templateUrl: './botoes.component.html',
  styleUrls: ['./botoes.component.css']
})
export class BotoesComponent implements OnInit {

  @Input() exibePiloto: boolean = true;

  @Output() evento = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.exibePiloto)
  }

  exibirPilotos() {
    this.exibePiloto = true;
    this.evento.emit({ novoValor: true });
  }
  ocultarPilotos() {
    this.exibePiloto = false;
    this.evento.emit({ novoValor: false });
  }
}
