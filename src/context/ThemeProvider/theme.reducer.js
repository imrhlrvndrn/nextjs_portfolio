import { darkTheme, lightTheme, customTheme } from '../../shared';

export const initialThemeState = {
    theme: customTheme,
    isDarkTheme: true,
    inverted_theme: {},
};

export const themeReducers = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return {
                ...state,
                isDarkTheme: !state.isDarkTheme,
                theme: !state.isDarkTheme
                    ? {
                          ...state.theme,
                          colors: { ...state.theme.colors, ...darkTheme },
                      }
                    : {
                          ...state.theme,
                          colors: { ...state.theme.colors, ...lightTheme },
                      },
                inverted_theme: !state.isDarkTheme ? lightTheme : darkTheme,
            };

        case 'SET_THEME': {
            return {
                ...state,
                theme: {
                    ...state.theme,
                    colors: { ...state.theme.colors, ...darkTheme },
                },
            };
        }

        default:
            return state;
    }
};
