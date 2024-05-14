import { useWindowResize } from '../hooks';

// styles
import { Container, Grid, Text } from '../shared';
import { Button } from '../shared/styled_components/button.styles';
import { GridChild } from '../shared/styled_components/grid.styles';

// components
import { BasicLayout } from '../layouts';
import { FeaturedProject, Navigation, Footer } from '../components';
import { useRouter } from 'next/router';

const Home = () => {
    const router = useRouter();
    const {
        size: { width: _width },
        is_tablet,
        is_mobile,
    } = useWindowResize({ tablet: 1000, mobile: 600 });

    return (
        <BasicLayout>
            <Grid
                columns="repeat(12, 1fr)"
                margin={is_tablet() ? '0 2rem' : '0 5rem'}
                area={
                    is_tablet()
                        ? "'nav nav nav nav nav nav nav nav nav nav nav nav''. home home home home home home home home home home .''about about about about about about about about about about about about''projects projects projects projects projects projects projects projects projects projects projects projects''social social social social social social social social social social social social'"
                        : "'. nav nav nav nav nav nav nav nav nav nav .''. . home home home home home home home home . .''. about about about about about about about about about about .''. projects projects projects projects projects projects projects projects projects projects .''. social social social social social social social social social social .'"
                }
            >
                <Navigation />
                <GridChild margin="4rem 0 8rem 0" gridArea="home">
                    <Text
                        color="red"
                        as="h1"
                        margin="4rem auto 0 auto"
                        align="center"
                        size={is_mobile() ? 'heading1/large' : 'display1/large'}
                        weight="extrabold"
                    >
                        I help turn startups and designers into superheroes
                    </Text>
                    <Text
                        as="h2"
                        width="80%"
                        align="center"
                        weight="medium"
                        color="secondary"
                        size="heading4/large"
                        margin="1rem auto 0 auto"
                    >
                        Hi it’s Rahul here.{' '}
                        <Text as="span" color="primary" weight="semibold">
                            Web Designer & Developer
                        </Text>{' '}
                        from India. I create custom web apps that help businesses do better online
                    </Text>
                    <Button
                        borderRadius="0.5rem"
                        margin="2rem auto 0 auto"
                        onClick={() => router.push('https://www.linkedin.com/in/imrhlrvndrn/')}
                    >
                        <Text size="heading4/large" weight="semibold">
                            Get in touch
                        </Text>
                    </Button>
                </GridChild>
                <GridChild margin="0 0 8rem 0" gridArea="about">
                    <Grid
                        auto_rows="420px"
                        columns="repeat(10, 1fr)"
                        area={
                            is_mobile()
                                ? "'summary summary summary summary summary summary summary summary summary summary' 'about_me_img about_me_img about_me_img about_me_img about_me_img about_me_img about_me_img about_me_img about_me_img about_me_img'"
                                : "'summary summary summary summary . about_me_img about_me_img about_me_img about_me_img about_me_img'"
                        }
                        align="center"
                    >
                        <Text
                            height="max-content"
                            size="heading4/large"
                            style={{ gridArea: 'summary' }}
                        >
                            I'm a self-taught front-end developer. My job as a developer is to be
                            the voice of the user. To build user interfaces that are functional,
                            accessible, and visually appealing. If you're interested, let's work on
                            a project together! I love to automate stuff, it allows me to be more
                            efficient.
                        </Text>
                        {/* // ! Figure out a way to pass styles with `style` prop in NextJS Image component */}
                        {/* <img
                        // width={556}
                        height={418}
                        src="https://images.unsplash.com/photo-1638043009676-cebf001a850c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        alt="Abstract Gold Pattern"
                        style={{
                            gridArea: 'about_me_img',
                        }}
                    /> */}
                        <div
                            style={{
                                gridArea: 'about_me_img',
                                backgroundPosition: 'center',
                                backgroundImage:
                                    'url(https://images.unsplash.com/photo-1638043009676-cebf001a850c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)',
                                objectFit: 'cover',
                                height: '320px',
                            }}
                        ></div>
                    </Grid>
                </GridChild>
                <GridChild margin="0 0 8rem 0" gridArea="projects">
                    <Text weight="semibold" size="heading3/large" color="secondary">
                        FEATURED PROJECTS
                    </Text>
                    <Grid
                        margin="2rem 0 0 0"
                        columns="repeat(10, 1fr)"
                        area={
                            is_mobile()
                                ? "'spotify spotify spotify spotify spotify spotify spotify spotify spotify spotify' 'netflix netflix netflix netflix netflix netflix netflix netflix netflix netflix'"
                                : "'spotify spotify spotify spotify spotify netflix netflix netflix netflix netflix'"
                        }
                    >
                        <Container style={{ gridArea: 'spotify' }}>
                            <FeaturedProject
                                pathname={`https://github.com/imrhlrvndrn/spotify-clone`}
                                title="Spotify Clone"
                                cover_image="https://images.unsplash.com/photo-1614680376593-902f74cf0d41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                            />
                        </Container>
                        <Container style={{ gridArea: 'netflix' }}>
                            <FeaturedProject
                                pathname={`https://github.com/imrhlrvndrn/netflix-clone`}
                                title="Netflix Clone"
                                cover_image="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                            />
                        </Container>
                    </Grid>
                </GridChild>
                <GridChild gridArea="social">
                    <Footer />
                </GridChild>
            </Grid>
        </BasicLayout>
    );
};

export default Home;
