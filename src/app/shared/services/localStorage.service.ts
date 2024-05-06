import { Injectable, ɵCompiler_compileModuleAndAllComponentsAsync__POST_R3__ } from "@angular/core"; 
import { BehaviorSubject } from "rxjs";
import { Character } from "../interfaces/data.interface";
import { ToastrService } from "ngx-toastr";

const MY_FAVORITES = 'myFavorites';

@Injectable({
    providedIn: 'root'
})

export class LocalStorageService{
    //RECUPERAR DATA DESDE LA API Y RECUPERAR POR BEHABIOR SUBJECT
    private charactersFavSubject = new BehaviorSubject<Character[]>(null);//AL SER BehaviorSubject NECESITA UN VALOR por defecto
    charactersFav$ = this.charactersFavSubject.asObservable();

    //INYECTAMOS SERVICE DEL TOAST
    constructor(private toastrSvc : ToastrService){
        //cuando se inicialize la clase llamar al metodo
        this.initialStorage();
    }


    //gestionar AÑADIR FAVORITO O ELIMINAR FAVORITO
    //DEBEMOS RECIBIRLO
    addOrRemoveFavorite(character:Character): void{
        const {id} = character;//DESTRUCTURIN DEL ID
        const currentFav = this.getFavoritesCharacters();//RECUPERAR LOS PERSONAJES FAVORITOS QUE ESTAN GUARDADOS
        const found = !!currentFav.find((fav:Character) => fav.id === id); //FIND DE JS BUSCA EL PRIMER ELEMENTO QUE CUMPLE (FAV Y ID ES IGUAL =  LO ENCONTRADO)
        //SE PUEDE UTILIZAR OPERADOR TERNARIO, si es true elimina y si es false se agrega
        found ? this.removeFromFavorite(id) : this.addToFavorite(character);
    }

    //GUARDAR FAVORITO
    private addToFavorite(character:Character):void{
        try {
            const currentsFav = this.getFavoritesCharacters();//Devuelve los favoritos 
            //...SPRINF OPERATOR
            //MERGE DE FAVORITOS ACTUALES Y FAVORITO NUEVO AGREGADO
            localStorage.setItem(MY_FAVORITES, JSON.stringify([...currentsFav, character])); //PASAMOS FAVORITOS Y GUARDAMOS EL VARITO QUE  RECIBIMOS
            //ACTUALIZAMOS OBSERVABLE
            this.charactersFavSubject.next([...currentsFav, character]);//LO QUE SE TIENE Y LO QUE SE QIUIERE GUARDAR
            this.toastrSvc.success( ` ${character.name} agregago`, 'Favoritos');
        } catch (error) {
            //console.log('Error al agregar a favoritos',error)
            this.toastrSvc.error( ` ${character.name} Error al agregar a favoritos`, 'Favoritos');
            //alert('Error')
        }
    }

    //ELIMINAR FAVORITO
    //RECUPERA FAVORITOS ACTUALES Y FILTRA , DEUVELVE NUEVO ARRAY
    private removeFromFavorite(id:number):void{
        try {
        const currentsFav = this.getFavoritesCharacters();//Devuelve los favoritos 
        const characters = currentsFav.filter(item => item.id === id);//devuelve nuevo array con los elementos diferentes al id agegadfo
        localStorage.setItem(MY_FAVORITES, JSON.stringify([...characters]));
        this.charactersFavSubject.next([...characters]);//LO QUE SE TIENE Y LO QUE SE QIUIERE GUARDAR
        this.toastrSvc.warning( ` ${characters} Eliminado de favorito`, 'Favoritos');
        } catch (error) {
            console.log('Error ',error)
            this.toastrSvc.error( ` ${error} Error al agregar a favoritos`, 'Favoritos');
        }
        
    }

//  RECUPERA FAVORITO
    getFavoritesCharacters():any{
        try {
            const charactersFav = JSON.parse(localStorage.getItem(MY_FAVORITES));//RECUPERAR LOS PERSONAJES DEL LOCAL STORAGE
            //DEVOLVER CHARACTERSFAV Y ALAMCENAR EN OBSERVABLE LOS FAVORITES
            this.charactersFavSubject.next(charactersFav);//GUARDA FAVORITOS
            return charactersFav;
            } catch (error) {
            console.log('Error al recuperar favorites', error)
        }
    
    }
    
    //LIMPIAR LOCAL STORAGE
    clearStorage():void{
        try {
            localStorage.clear();
        } catch (error) {
            console.log('Error al limpiar local storage',error)
        }
    }

    //VALIDA
    private initialStorage():void{
        //SI NO HAY NADA PREPARA EL TERRENO PARA TRABAR CON EL ES DECIR CREARÁ UN ARRAY VACIO
        const currents = JSON.parse(localStorage.getItem(MY_FAVORITES)); //LEER NUESTRO LOCAL STORAGE
        //SE CREAR ARRAY VACIO SI NO HAY NADA
        if(!currents){
            localStorage.setItem(MY_FAVORITES, JSON.stringify([]));
        }

        this.getFavoritesCharacters();//
    }
} 