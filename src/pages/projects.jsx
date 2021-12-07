import { FeaturedProject, Navigation } from '../components';
import { BasicLayout } from '../layouts';
import { Container, Grid, Text } from '../shared';
import { GridChild } from '../shared/styled_components/grid.styles';

const Projects = () => {
    return (
        <BasicLayout title="Rahul Ravindran | Projects">
            <Grid
                columns="repeat(12, 1fr)"
                margin="0 5rem 0 5rem"
                area="
                    '. nav nav nav nav nav nav nav nav nav nav .'
                    '. . home home home home home home home home . .'
                    '. projects projects projects projects projects projects projects projects projects projects .'
                "
            >
                <Navigation />
                <GridChild gridArea="home" margin="9.625rem 0 9.625rem 0">
                    <Text
                        align="center"
                        size="display1/large"
                        weight="extrabold"
                    >
                        Look at my projects you little dog shit
                    </Text>
                </GridChild>
                <GridChild margin="0 0 9.625rem 0" gridArea="projects">
                    <Text
                        weight="extrabold"
                        size="heading3/large"
                        color="secondary"
                    >
                        FEATURED PROJECTS
                    </Text>
                    <Grid
                        margin="2rem 0 0 0"
                        columns="repeat(10, 1fr)"
                        area="
                    'spotify spotify spotify spotify spotify netflix netflix netflix netflix netflix'
                "
                    >
                        <Container style={{ gridArea: 'spotify' }}>
                            <FeaturedProject
                                title="Spotify Clone"
                                cover_image="https://images.unsplash.com/photo-1614680376593-902f74cf0d41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                            />
                        </Container>
                        <Container style={{ gridArea: 'netflix' }}>
                            <FeaturedProject
                                title="Netflix Clone"
                                cover_image="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                            />
                        </Container>
                    </Grid>
                </GridChild>
            </Grid>
        </BasicLayout>
    );
};

export default Projects;
