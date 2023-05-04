import { projects } from '../constants';
import { BasicLayout } from '../layouts';
import { useWindowResize } from '../hooks';

// styles
import { Container, Grid, Text } from '../shared';
import { GridChild } from '../shared/styled_components/grid.styles';

// components
import { Footer, Navigation, Project } from '../components';

const Projects = () => {
    const {
        size: { width: _width },
        is_tablet,
        is_mobile,
    } = useWindowResize({ tablet: 1000, mobile: 600 });

    return (
        <BasicLayout title="Rahul Ravindran | Projects">
            <Grid
                columns="repeat(12, 1fr)"
                margin={is_tablet() ? '0 2rem' : '0 5rem'}
                area={
                    is_tablet()
                        ? "'nav nav nav nav nav nav nav nav nav nav nav nav''. hero hero hero hero hero hero hero hero hero hero .''projects projects projects projects projects projects projects projects projects projects projects projects' 'footer footer footer footer footer footer footer footer footer footer footer footer'"
                        : "'. nav nav nav nav nav nav nav nav nav nav .''. . hero hero hero hero hero hero hero hero . .''. projects projects projects projects projects projects projects projects projects projects .' '. footer footer footer footer footer footer footer footer footer footer .'"
                }
            >
                <Navigation />
                <GridChild gridArea="hero" margin={is_mobile() ? '4rem 0' : '8rem 0'}>
                    <Text align="center" size="display1/large" weight="extrabold">
                        Some things I've built 🤓
                    </Text>
                </GridChild>
                {/* <GridChild margin="0 0 8rem 0" gridArea="projects">
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
                </GridChild> */}
                <GridChild margin="0 0 4 rem 0" gridArea="projects">
                    {projects?.map(
                        ({ image_url, title, description, links, tech_stacks }, index) => (
                            <Project
                                title={title}
                                project_links={links}
                                image_url={image_url}
                                description={description}
                                tech_stacks={tech_stacks}
                                alignment={(index + 1) % 2 === 0 ? 'left' : 'right'}
                            />
                        )
                    )}
                </GridChild>
                <GridChild gridArea="footer">
                    <Footer />
                </GridChild>
            </Grid>
        </BasicLayout>
    );
};

export default Projects;
