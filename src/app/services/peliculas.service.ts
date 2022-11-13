import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})
export class PeliculasService {

    constructor(private http:HttpClient) {

     }

     getPelículas(id:string) {
        let url = 'https://www.omdbapi.com/?s=' + id + '&apikey=c2fe23d7';
        let header = new HttpHeaders()
        return this.http.get(url);
     }
}
