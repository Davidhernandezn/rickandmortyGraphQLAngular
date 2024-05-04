import { DataResponse, Episode } from './../interfaces/data.interface';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular'; //IMPORTAR
import { BehaviorSubject } from 'rxjs';
import { take, tap } from 'rxjs/operators' ;//PARA CONSUMIR usamos estos operadores
import { Character } from '../interfaces/data.interface';
import { LocalStorageService } from './localStorage.service';

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
  //inyectamos otro servicio
  constructor(private apollo: Apollo, private localStorageSvc: LocalStorageService) {
    this.getDataAPI(); //EJECUTARSE CADA VEZ QUE LA INSTANCIA DE LA CLASE SE EJECUTE
   }

/** 
private getDataAPI():void{
  this.apollo.watchQuery<DataResponse>({
    query:QUERY
  }).valueChanges.pipe(
    take(1),
    tap(({data}) =>{
      const {characters, episodes} = data;
      console.log('DAT', data)
      this.charactersSubject.next(characters.results || []);
      this.episodesSubject.next(episodes.results || []);
    })
  ).subscribe();
}**/


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
          console.log('Episodes: before', episodes.results);

          this.episodesSubject.next(episodes.results)
          console.log('Episodes emitted:', episodes.results);
          //this.charactersSubject.next(characters.results) // YA LO MANDAMOS EN EL METODO PARSE CHARA..
          console.log('Respuesta...')
          this.parseCharactersData(characters.results);
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


//NO PUEDO TRABAJAR EN EL MISMO OBJETO RECIBIDO 
//CON LOS PERSONAJES POR LO QUE LO MANEJAMOS APARTE AGREGAR SI ES FAVORITE EN EL LOCALSTORAGE TRUE FALSE
//RECIVIMO CHARACTERS
private parseCharactersData(characters: Character[]):void{
//PARA RECUPERAR FAVORITOS DEL LOCAL STORAGE LO TENEMOS EN EL OTRO SERVICE
  const currentFavs = this.localStorageSvc.getFavoritesCharacters();
  //RECORRER ARRAY RECIBIDO CON MAP
  const newData = characters.map(character => {//RECORRE API
    //BUSCAR SI EL PERSONAJE ES FAVORITO O NO
    //DEVUELVE COINCIDENCIA SI ESTA EN EL LOCAL STORAGE CORRESPONDE A LOS QUE SE RECUPERARON DEL API
    const found = !!currentFavs.find((fav: Character) => fav.id === character.id);//DEVUELVE LA PRIMERA COINCIDENCIA (VALIDA SI SE HA ENCONTRADO O NO) TRUE FALSE
    return { ...character, isFavorite:found };//DEVUELVE PERSONAJE RECORRIDO Y FAVITE SE LE ASIGNA VALOR DE TRUE O FALSE
  });

  this.charactersSubject.next(newData);

}}