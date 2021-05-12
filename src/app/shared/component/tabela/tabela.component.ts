import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PilotoService } from 'src/app/service/piloto.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  constructor(private pilotoService: PilotoService) {
  }

  ngOnInit(): void {
  }

  listaPilotos = this.pilotoService.listarPilotos();

  displayedColumns: string[] = [
    'id',
    'urlFoto',
    'nome',
    'sigla',
    'idade',
    'pais',
    'escuderia',
    'titulos',
    'vitorias',
    'podios',
    'poles',
    'voltaMaisRapida'
  ];

  dataSource = new MatTableDataSource(this.listaPilotos);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
