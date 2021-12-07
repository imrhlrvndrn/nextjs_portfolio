import { CustomThemeProvider } from '../context';
import { NavigationProvider } from '../context/NavigationProvider';
import { StyledThemeProvider } from '../shared';

function MyApp({ Component, pageProps }) {
    return (
        <CustomThemeProvider>
            <StyledThemeProvider>
                <NavigationProvider>
                    <Component {...pageProps} />
                </NavigationProvider>
            </StyledThemeProvider>
        </CustomThemeProvider>
    );
}

export default MyApp;
