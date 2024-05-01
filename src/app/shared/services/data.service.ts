import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular'; //IMPORTAR
import { BehaviorSubject } from 'rxjs';
import { take, tap } from 'rxjs/operators' ;//PARA CONSUMIR usamos estos operadores

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
  private episodesSubjext = new BehaviorSubject <any[]>(null);
  //crear propiedad   episodes$  por observable
  episodes$ = this.episodesSubjext.asObservable();

  //OBSERVABLE 2
  private charactersSubjext = new BehaviorSubject <any[]>(null);
  characters$ = this.charactersSubjext.asObservable();

  //DECLARA PROPIEDAD
  constructor(private apollo: Apollo) {
    this.getDataAPI(); //EJECUTARSE CADA VEZ QUE LA INSTANCIA DE LA CLASE SE EJECUTE
   }


  //PETICION CON APOLLO
  //NO USAR PRIVATE SI AUN NO GUARDAS EL RESULTADO EN NINGUN OBSERVABLE, PODEMOS LLAMARLO DESDE UN COMPONENTE
async getDataAPI() {
    console.log('Método Servidor...')

    // Usa petición watchQuery
    this.apollo.watchQuery<any>({
        query: QUERY
    }).valueChanges.pipe(
        take(1),
        tap(res => {
            console.log('Respuesta...')
            console.log(res);
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
