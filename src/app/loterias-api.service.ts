import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ILoteria } from './models/loteria';
import { ILatestConcurso } from './models/latest-concurso';

@Injectable({
  providedIn: 'root'
})
export class LoteriasApiService {

  constructor(private http: HttpClient) { }

  getConcursos(loteria: string): Observable<ILoteria[]> {
    return this.http.get<ILoteria[]>(
      `https://loteriascaixa-api.herokuapp.com/api/${loteria}`
    );
  }

  getLatestConcurso(loteria: string): Observable<ILatestConcurso> {
    return this.http.get<ILatestConcurso>(
      `https://loteriascaixa-api.herokuapp.com/api/${loteria}/latest`
    );
  }
}
