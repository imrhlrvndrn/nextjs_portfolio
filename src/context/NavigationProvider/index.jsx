import { createContext, useContext, useReducer } from 'react';
import {
    initialNavigationState,
    navigationReducers,
} from './navigation.reducer';

export const NavigationContext = createContext();

export const useNavigation = () => useContext(NavigationContext);

export const NavigationProvider = ({ children }) => {
    return (
        <NavigationContext.Provider
            value={useReducer(navigationReducers, initialNavigationState)}
        >
            {children}
        </NavigationContext.Provider>
    );
};
