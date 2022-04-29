/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */

import * as React from 'react';
import RowTable from './RowTable';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../config/i18n/i18n';
import { Pokemon } from '../../domain/model/Pokemon';

describe('RowTable', function () {
    it('Mount the component', () => {
        const pokemonData: Pokemon = {
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
        };
        const { container } = render(
            <I18nextProvider i18n={i18n}>
                <table>
                    <tbody>
                        <tr>
                            <RowTable pokemon={pokemonData} />
                        </tr>
                    </tbody>
                </table>
            </I18nextProvider>,
        );
        expect(container.getElementsByClassName('td-pokemon').length).toBe(8);
    });
});
