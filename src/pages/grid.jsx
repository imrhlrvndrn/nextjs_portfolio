import { Grid } from '../shared';

const grid = () => {
    return (
        <Grid
            columns="repeat(12, 1fr)"
            margin="2rem 5rem 0 5rem"
            area="
                '. nav nav nav nav nav nav nav nav nav nav .'
                '. . home home home home home home home home . .'
                '. about about about about about about about about about about .'
                '. projects projects projects projects projects projects projects projects projects projects .'
            "
        >
            <nav
                style={{
                    backgroundColor: '#eee',
                    marginBottom: '1rem',
                    color: '#121212',
                    gridArea: 'nav',
                }}
            >
                Navigation bar
            </nav>
            <section
                style={{
                    gridArea: 'home',
                    backgroundColor: '#eee',
                    marginBottom: '1rem',
                    color: '#121212',
                }}
            >
                home section
            </section>
            <section
                style={{
                    gridArea: 'about',
                    backgroundColor: '#eee',
                    marginBottom: '1rem',
                    color: '#121212',
                }}
            >
                about section
            </section>
            <section
                style={{
                    gridArea: 'projects',
                    backgroundColor: '#eee',
                    marginBottom: '1rem',
                    color: '#121212',
                }}
            >
                featured projects section
            </section>
        </Grid>
    );
};

export default grid;
