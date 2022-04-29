import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private url : string = environment.baseUrl
  constructor(private http : HttpClient) { }

  getHeroes() : Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.url}/heroes`)
  }
  getHeroesById(id: string) : Observable<Heroe>{
    return this.http.get<Heroe>(`${this.url}/heroes/${id}`)
  }
  getSugerencias( termino :string) : Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.url}/heroes?q=${termino}&_limit=5`)
  }
  agregarHeroe(heroe : Heroe) : Observable<Heroe>{
    return this.http.post<Heroe>(`${this.url}/heroes`,heroe)
  }
  actualizarHeroe(heroe : Heroe) : Observable<Heroe>{
    return this.http.put<Heroe>(`${this.url}/heroes/${heroe.id}`,heroe)
  }
  borrarHeroe(id : string) : Observable<any>{
    return this.http.delete<any>(`${this.url}/heroes/${id}`)
  }


}
