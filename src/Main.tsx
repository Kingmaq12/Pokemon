import React from 'react';
import './Main.scss';
import RouterConfig from './navigation/RouterConfig';
import { I18nextProvider } from 'react-i18next';
import i18n from '../config/i18n/i18n';

const Main = (props: any) => {
    return (
        <I18nextProvider i18n={i18n}>
            <RouterConfig {...props} />
        </I18nextProvider>
    );
};

export default Main;
