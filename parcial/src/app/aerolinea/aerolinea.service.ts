import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Aerolinea } from './aerolinea';
import { environment } from '../../environments/environment.development';

@Injectable()
export class AerolineaService {

    private apiUrl = environment.baseUrl;

constructor(private http:HttpClient) { }

getAerolineas(): Observable<Aerolinea[]>
{
    return this.http.get<Aerolinea[]>(this.apiUrl+"flights.json");
}

getAerolinea(id:string): Observable<Aerolinea>
{
    return this.http.get<Aerolinea>(this.apiUrl+`flights/${id}.json`);
}

}
