import { ThemeProvider } from 'styled-components';
import { useTheme } from '../context/ThemeProvider';
import { GlobalStyles } from './globals';
import { useEffect } from 'react';

export const lightTheme = {
    // neutral: {
    //     20: '#F4F4F6',
    //     50: '#EFEEF1',
    //     100: '#E4E2E8',
    //     200: '#C9C6D2',
    //     300: '#938DA5',
    //     400: '#605A72',
    //     500: '#302D39',
    //     600: '#151419',
    // },

    background: {
        primary: '#F4F4F6',
        secondary: '#EFEEF1',
        ternary: '#E4E2E8',
    },
    text: {
        primary: '#151419',
        secondary: '#605A72',
    },
};

export const darkTheme = {
    background: {
        primary: '#151419',
        secondary: '#302D39',
        ternary: '#605A72',
    },
    text: {
        primary: '#F4F4F6',
        secondary: '#938DA5',
    },
};

export const customTheme = {
    breakpoints: {
        lg_tablet: 'screen and (max-width: 1024px)',
        tablet: 'screen and (max-width: 770px)',
        mobile: 'screen and (max-width: 510px)',
        sm_mobile: 'screen and (max-width: 350px)',
    },
    colors: {
        constants: {
            text: {
                light: '#F4F4F6',
                dark: '#151419',
            },
            purple: {
                50: '#BEB0ED',
                200: '#9B87E4',
                400: '#795DDA',
                600: '#5734D1',
                800: '#4427AA',
            },
            alert: {
                success: {
                    primary: '#227C5E',
                    secondary: '#8AE0C4',
                },
                danger: {
                    primary: '#DD1513',
                    secondary: '#FAC2C2',
                },
                warning: {
                    primary: '#D58D15',
                    secondary: '#F8E2BE',
                },
                info: {
                    primary: '',
                    secondary: '',
                },
            },
            white: '#E4E2E8',
            black: '#151419',
        },
    },
    fonts: {
        weight: {
            medium: 400,
            semibold: 600,
            bold: 700,
            extrabold: 800,
        },
        size: {
            display1: { large: '3.75rem' },
            display2: { large: '3rem' },
            heading1: { large: '3rem', small: '2.125rem' },
            heading2: { large: '2.125rem', small: '1.5rem' },
            heading3: { large: '1.5rem', small: '1.25rem' },
            heading4: { large: '1.25rem', small: '1rem' },
            heading5: { large: '1rem', small: '0.875rem' },
            heading6: { large: '0.875rem', small: '0.75rem' },
            body: { large: '1rem', small: '0.875rem' },
            caption: { large: '0.75rem', small: '0.6875rem' },
            xs: '0.5rem',
            sm: '0.8rem',
            md: '1rem',
            lg: '1.2rem',
            xl: '1.7rem',
            '2xl': '2rem',
            '4xl': '4rem',
            '6xl': '6rem',
        },
    },
    spacing: {
        xs: '0.5rem',
        sm: '0.8rem',
        md: '1rem',
        lg: '1.2rem',
        xl: '1.7rem',
        '2xl': '2rem',
        '4xl': '4rem',
        '6xl': '6rem',
    },
};

export const StyledThemeProvider = ({ children }) => {
    const [{ isDarkTheme }, themeDispatch] = useTheme();

    const theme = {
        ...customTheme,
        colors: {
            ...customTheme.colors,
            ...(isDarkTheme ? darkTheme : lightTheme),
        },
    };

    useEffect(() => {
        themeDispatch({ type: 'SET_THEME' });
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            {children}
        </ThemeProvider>
    );
};
