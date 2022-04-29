import React, { useEffect } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import localRoutes from './routes';

const RouterConfig: React.FunctionComponent<RouterConfigProps> = ({ emitter }: any) => {
    const { path } = useRouteMatch();
    const { i18n } = useTranslation();
    useEffect(() => {
        emitter.on('languageChanged', (lng: any) => {
            i18n.changeLanguage(lng);
        });
    }, []);
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <Switch>
                {localRoutes.map((route) => (
                    <Route
                        key={route.path}
                        path={`${path}${route.path}`}
                        component={route.component}
                        exact={route.exact}
                    />
                ))}
            </Switch>
        </React.Suspense>
    );
};

interface RouterConfigProps {
    children?: any;
}

export default RouterConfig;
