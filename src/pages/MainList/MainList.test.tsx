/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */

import * as React from 'react';
import MainList from './MainList';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../config/i18n/i18n';

describe('MainList', function () {
    it('Mount the component', () => {
        const { container } = render(
            <I18nextProvider i18n={i18n}>
                <MainList />
            </I18nextProvider>,
        );

        expect(container.getElementsByClassName('page-wrapper').length).toBe(1);
    });
});
