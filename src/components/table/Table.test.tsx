/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */

import * as React from 'react';
import { Table } from './Table';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../config/i18n/i18n';
import { Pokemon } from '../../domain/model/Pokemon';

describe('Table', function () {
    it('Mount the component', () => {
        const listPokemonData: Pokemon[] = [
            {
                id: 1,
                name: 'test',
                baseExperience: 2,
                height: 2,
                order: 2,
                weight: 3,
                frontDefault: 'testest',
                types: [
                    {
                        name: 'normal',
                    },
                ],
            },
            {
                id: 2,
                name: 'test2',
                baseExperience: 2,
                height: 2,
                order: 2,
                weight: 3,
                frontDefault: 'testest',
                types: [
                    {
                        name: 'normal',
                    },
                ],
            },
            {
                id: 3,
                name: 'test1',
                baseExperience: 2,
                height: 2,
                order: 2,
                weight: 3,
                frontDefault: 'testest',
                types: [
                    {
                        name: 'normal',
                    },
                ],
            },
        ];
        const { container } = render(
            <I18nextProvider i18n={i18n}>
                <Table listPokemon={listPokemonData} />
            </I18nextProvider>,
        );
        expect(container.getElementsByClassName('td-pokemon').length).toBe(24);
    });

    it('Mount the component empty', () => {
        const { container } = render(
            <I18nextProvider i18n={i18n}>
                <Table listPokemon={[]} />
            </I18nextProvider>,
        );
        expect(container.getElementsByClassName('td-pokemon').length).toBe(0);
    });
});
