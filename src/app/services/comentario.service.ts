import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentario } from '../interfaces/comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  private AppURL = 'https://localhost:44333/';
  private ApiURL = 'api/comentario/';

  constructor(private http:HttpClient){}
  
  getListComentarios(): Observable<any> { 
    return this.http.get(this.AppURL + this.ApiURL);
  }

  getComentario(id:number): Observable<any> {
    return this.http.get(this.AppURL + this.ApiURL + id);
  }

  deleteComentario(id:number): Observable<any> {
    return this.http.delete(this.AppURL + this.ApiURL + id);
  }

  saveComentario(comentario:Comentario): Observable<any> {
    return this.http.post(this.AppURL + this.ApiURL, comentario )
  }

  updateComentario(id:number, comentario:Comentario): Observable<any>{
    return this.http.put(this.AppURL + this.ApiURL + id, comentario);
  }
}
