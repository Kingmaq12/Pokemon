export interface Pokemon {
    id: number;
    name: string;
    baseExperience: number;
    height: number;
    order: number;
    weight: number;
    frontDefault: string;
    types: Types[];
}

interface Types {
    name: string;
}

interface TypeDescriptionAPI {
    name: string;
    url: string;
}

interface TypesAPI {
    slot: number;
    type: TypeDescriptionAPI;
}

interface Sprites {
    front_default: string;
}

export interface PokemonAPI {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    order: number;
    weight: number;
    sprites: Sprites;
    types: TypesAPI[];
}
