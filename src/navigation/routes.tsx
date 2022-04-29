import React from 'react';

const MainListPage = React.lazy(() => import('../pages/MainList/MainList'));

const routes: Route[] = [
    {
        path: '/',
        component: MainListPage,
        icon: 'view_list',
        title: 'Pokemon',
        exact: true,
    },
];

interface Route {
    path: string;
    component: React.LazyExoticComponent<any>;
    icon: string;
    title: string;
    exact?: boolean | undefined;
}

export default routes;
