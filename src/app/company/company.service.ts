import { Observable } from 'rxjs';
import { Company } from './company';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient:HttpClient) { }
  urlCompany: string ="http://localhost:8080/company/companiesList/";

  companykList():Observable<Company[]>{
    return this.httpClient.get<Company[]>(`${this.urlCompany}`);
  }
}
