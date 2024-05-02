import { DataResponse, Episode } from './../interfaces/data.interface';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular'; //IMPORTAR
import { BehaviorSubject } from 'rxjs';
import { take, tap } from 'rxjs/operators' ;//PARA CONSUMIR usamos estos operadores
import { Character } from '../interfaces/data.interface';

//DEFINE LO QUE DESEAS OBTENER
const QUERY = gql`{
    episodes{
      results{
        name
        episode
      }
    }
      
    characters {
        results {
          id
          name
          status
          species
          gender
          origin{
            name
          }
          location{
            name
          }
          image
        }
    }
}`;

@Injectable({
  providedIn: 'root'
})

export class DataService {
  //OBSEVABLE 1
  //CREAR E INICIALIZARLO EN NULL (BehaviorSubject)
  private episodesSubject = new BehaviorSubject <Episode[]>(null);//NO USAR VALORES TIPO ANY HAY QUE CREAR SU INTERFAZ
  //crear propiedad   episodes$  por observable
  episodes$ = this.episodesSubject.asObservable();

  //OBSERVABLE 2
  private charactersSubject = new BehaviorSubject <Character[]>(null);//NO USAR VALORES TIPO ANY
  characters$ = this.charactersSubject.asObservable();

  //DECLARA PROPIEDAD
  constructor(private apollo: Apollo) {
    this.getDataAPI(); //EJECUTARSE CADA VEZ QUE LA INSTANCIA DE LA CLASE SE EJECUTE
   }


  //PETICION CON APOLLO
  //NO USAR PRIVATE SI AUN NO GUARDAS EL RESULTADO EN NINGUN OBSERVABLE, PODEMOS LLAMARLO DESDE UN COMPONENTE
private async getDataAPI() {
    console.log('Método Servidor...')

    // Usa petición watchQuery
    this.apollo.watchQuery<DataResponse>({//DataResponse POR QUE TRAE A EPISODES Y CHARACTER DEFINIDO EN LA INTERFACE
        query: QUERY
    }).valueChanges.pipe(
        take(1),
        tap(({data}) => {//DESTRUCTURING
          //DESTRUCTURING DE DATA (PODEMOS ACCEDER AL LOS OBSERVABLES)
          const {characters, episodes} = data;
          this.episodesSubject.next(episodes.result)
          this.charactersSubject.next(characters.result)
          console.log('Respuesta...')
        })
    ).subscribe({
        next: (data) => {
            // Manejar los datos emitidos por la observación aquí
            console.log('Datos recibidos:', data);
        },
        error: (error) => {
            // Manejar errores aquí
            console.error('Error en la suscripción:', error);
        },
        complete: () => {
            // Manejar la finalización de la observación aquí si es necesario
            console.log('Suscripción completada');
        }
    });
}



}
