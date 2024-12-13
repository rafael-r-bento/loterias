import { Component, Input, OnInit, ChangeDetectionStrategy, LOCALE_ID } from '@angular/core';
import { CurrencyPipe, registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { LoteriasApiService } from '../../loterias-api.service';
import { ILatestConcurso } from '../../models/latest-concurso';

registerLocaleData(pt);

@Component({
  selector: 'app-loteria-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CurrencyPipe, RouterLink, MatDividerModule],
  templateUrl: './loteria-card.component.html',
  styleUrl: './loteria-card.component.css',
  providers: [{provide: LOCALE_ID, useValue: 'pt'}]
})
export class LoteriaCardComponent implements OnInit {
  @Input({required: true, alias: 'loteria'}) nomeLoteria: string = "";
  subscription = new Array<Subscription>();
  latestConcurso?: ILatestConcurso;

  constructor(
    private loteriasApiService: LoteriasApiService
  ) {}

  ngOnInit() {
    this.subscription.push(
      this.loteriasApiService.getLatestConcurso(this.nomeLoteria).subscribe((response: ILatestConcurso) => {
        this.latestConcurso = response;
        console.log(this.latestConcurso);
      })
    );
  }
}
