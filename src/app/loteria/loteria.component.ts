import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ViewChild
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { LoteriasApiService } from '../loterias-api.service';  
import { ILoteria } from '../models/loteria';

@Component({
  selector: 'app-loteria',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule
  ],
  templateUrl: './loteria.component.html',
  styleUrl: './loteria.component.css'
})
export class LoteriaComponent {
  nomesColunasPremiacoes: string[] = [];
  descricoesColunasPremiacoes: string[] = [];
  nomeLoteria: string = "";
  displayedColumns: string[] = ['concurso', 'data', 'dezenas'];
  subscription = new Array<Subscription>();
  resultsLength = 0;
  dataSourceTable = new MatTableDataSource<ILoteria>([]);
  dataSourceTableList?: ILoteria[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor(
    private cdr: ChangeDetectorRef,
    private loteriasApiService: LoteriasApiService,
    private route: Router
  ) {
    console.log(this.route.url);
    switch (this.route.url) {
      case '/maismilionaria':
        this.nomeLoteria = "maismilionaria";
        this.nomesColunasPremiacoes = ['acertos6trevos2', 'acertos6trevos01', 'acertos5trevos2', 'acertos5trevos01', 'acertos4trevos2', 'acertos4trevos01', 'acertos3trevos2', 'acertos3trevos01', 'acertos2trevos2', 'acertos2trevos01'];
        this.descricoesColunasPremiacoes = ['6 acertos + 2 trevos', '6 acertos + 1 ou nenhum trevo', '5 acertos + 2 trevos', '5 acertos + 1 ou nenhum trevo', '4 acertos + 2 trevos', '4 acertos + 1 ou nenhum trevo', '3 acertos + 2 trevos', '3 acertos + 1 ou nenhum trevo', '2 acertos + 2 trevos', '2 acertos + 1 ou nenhum trevo' ];
        this.displayedColumns = this.displayedColumns.concat(this.nomesColunasPremiacoes);
        break;
      case '/megasena':
        this.nomeLoteria = "megasena";
        this.nomesColunasPremiacoes = ['acertos6', 'acertos5', 'acertos4'];
        this.descricoesColunasPremiacoes = ['6 acertos', '5 acertos', '4 acertos'];
        this.displayedColumns = this.displayedColumns.concat(this.nomesColunasPremiacoes);
        break;
      case '/lotofacil':
        this.nomeLoteria = "lotofacil";
        this.nomesColunasPremiacoes = ['acertos15', 'acertos14', 'acertos13', 'acertos12', 'acertos11'];
        this.descricoesColunasPremiacoes = ['15 acertos', '14 acertos', '13 acertos', '12 acertos', '11 acertos'];
        this.displayedColumns = this.displayedColumns.concat(this.nomesColunasPremiacoes);
        break;
      case '/quina':
        this.nomeLoteria = "quina";
        this.nomesColunasPremiacoes = ['acertos5', 'acertos4', 'acertos3', 'acertos2'];
        this.descricoesColunasPremiacoes = ['5 acertos', '4 acertos', '3 acertos', '2 acertos'];
        this.displayedColumns = this.displayedColumns.concat(this.nomesColunasPremiacoes);
        break;
      case '/lotomania':
        this.nomeLoteria = "lotomania";
        this.nomesColunasPremiacoes = ['acertos20', 'acertos19', 'acertos18', 'acertos17', 'acertos16', 'acertos15', 'acertos0'];
        this.descricoesColunasPremiacoes = ['20 acertos', '19 acertos', '18 acertos', '17 acertos', '16 acertos', '15 acertos', '0 acertos'];
        this.displayedColumns = this.displayedColumns.concat(this.nomesColunasPremiacoes);
        break;
      case '/timemania':
        this.nomeLoteria = "timemania";
        this.nomesColunasPremiacoes = ['acertos7', 'acertos6', 'acertos5', 'acertos4', 'acertos3', 'time-coracao'];
        this.descricoesColunasPremiacoes = ['7 acertos', '6 acertos', '5 acertos', '4 acertos', '3 acertos', 'Time do Coração'];
        this.displayedColumns = this.displayedColumns.concat(this.nomesColunasPremiacoes);
        break;
      case '/duplasena':
        this.nomeLoteria = "duplasena";
        this.nomesColunasPremiacoes = ['acertos6sena1', 'acertos5sena1', 'acertos4sena1', 'acertos3sena1', 'acertos6sena2', 'acertos5sena2', 'acertos4sena2', 'acertos3sena2'];
        this.descricoesColunasPremiacoes = ['6 acertos', '5 acertos', '4 acertos', '3 acertos', '6 acertos', '5 acertos', '4 acertos', '3 acertos'];
        this.displayedColumns = this.displayedColumns.concat(this.nomesColunasPremiacoes);
        break;
      case '/federal':
        this.nomeLoteria = "federal";
        this.nomesColunasPremiacoes = ['acertos1', 'acertos2', 'acertos3', 'acertos4', 'acertos5'];
        this.descricoesColunasPremiacoes = ['1 acertos', '2 acertos', '3 acertos', '4 acertos', '5 acertos'];
        this.displayedColumns = this.displayedColumns.concat(this.nomesColunasPremiacoes);
        break;
      case '/diadesorte':
        this.nomeLoteria = "diadesorte";
        this.nomesColunasPremiacoes = ['acertos7', 'acertos6', 'acertos5', 'acertos4', 'mes-sorte'];
        this.descricoesColunasPremiacoes = ['7 acertos', '6 acertos', '5 acertos', '4 acertos', 'Mês da Sorte'];
        this.displayedColumns = this.displayedColumns.concat(this.nomesColunasPremiacoes);
        break;
      case '/supersete':
        this.nomeLoteria = "supersete";
        this.nomesColunasPremiacoes = ['acertos7', 'acertos6', 'acertos5', 'acertos4', 'acertos3'];
        this.descricoesColunasPremiacoes = ['7 acertos', '6 acertos', '5 acertos', '4 acertos', '3 acertos'];
        this.displayedColumns = this.displayedColumns.concat(this.nomesColunasPremiacoes);
        break;
    }
  }

  ngAfterViewInit(): void {
    this.subscription.push(
      this.loteriasApiService.getConcursos(this.nomeLoteria).subscribe((response: any) => {
        this.dataSourceTable.data = response;
      })
    );
    this.tableInit();
    this.cdr.detectChanges();
  }

  tableInit() {
    this.dataSourceTable.paginator = this.paginator;
    this.dataSourceTable.connect().subscribe((data) => {
      this.dataSourceTableList = data;
      this.cdr.detectChanges();
    });
  }
}
