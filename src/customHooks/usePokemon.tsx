import { useState } from 'react';
import useFetch from 'use-http';
import { API_URL } from '../util/constants';
import { Pokemon } from '../domain/model/Pokemon';
import { transformListPokemonDtoToModel } from '../factories/config-factory';

export const usePokemon = () => {
    const [listPokemon, setListCharacter] = useState<Pokemon[]>([]);
    const { get, response } = useFetch(API_URL);

    async function getListPokemon() {
        const list: Pokemon[] = [];
        for (let i = 1; i <= 20; i++) {
            const data = await get(`/v2/pokemon/${i}`);
            if (response.ok) list.push(transformListPokemonDtoToModel(data));
        }
        setListCharacter(list);
    }

    return {
        listPokemon,
        getListPokemon,
    };
};
