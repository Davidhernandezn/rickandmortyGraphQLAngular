//GENERIC
export interface APIResponse<T>{
    result: T;
}

//PARA USAR DE ESTA MANERA Y EVITAR PONER DE QUE TIPO ES EL RESULTADO USANDO GENERIC
export interface DataResponse{
    characters: APIResponse<Character[]>;
    episodes: APIResponse<Episode[]>;
}


export interface Episode{
    name: String;
    episode: String;
}

export interface Character{
    id: number;
    name: String;
    status: String;
    species: String;
    gender: String;
    image: String;
    isFavorite?: boolean;
}