import { CustomThemeProvider } from '../context';
import { StyledThemeProvider } from '../shared';

function MyApp({ Component, pageProps }) {
    return (
        <CustomThemeProvider>
            <StyledThemeProvider>
                <Component {...pageProps} />
            </StyledThemeProvider>
        </CustomThemeProvider>
    );
}

export default MyApp;
