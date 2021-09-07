import Recoil from 'recoil';
import { injectLifeCycle, actionHandlers } from 'coil-react';
import { Main } from './Main';
import type { State } from './type';
import type { Location } from 'history';

const initialState: State = {};

export const MainState = Recoil.atom({
    key: 'MainState',
    default: initialState,
});

export const useMainAction = () => {
    const onMount = () => {
        // TODO
    };

    const onRouteMatched = (routeParameter: any, location: Location<Readonly<any> | undefined>) => {
        // TODO
    };

    return actionHandlers({
        onMount,
        onRouteMatched,
    });
};

export const MainComponent = injectLifeCycle<any, any>(Main, useMainAction);
