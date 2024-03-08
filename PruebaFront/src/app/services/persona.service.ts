import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../modells/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  rutaGlobal = 'http://localhost:8080/persona/'
  
  constructor(private http: HttpClient) { }

  //Crear la persona
    crearPersona(persona: Persona){
      this.http.post<Persona>(this.rutaGlobal + 'nuevo', persona , {
        observe : 'response'
      })
    }

  //Obtener la persona
    getPersona(){
      return this.http.get<Persona[]>(this.rutaGlobal + 'mostrar')
    }

  //Actualizar la persona
    actualizarPersona(persona: Persona){
      return this.http.post<Persona>(this.rutaGlobal + 'update', persona, {
        observe: 'response'
      })
    }

  //Eliminar la persona
    eliminarPersona(numDocumento: number){
      this.http.post<Boolean>(this.rutaGlobal + numDocumento, {
        observe: 'response'
      } )
    }
}
