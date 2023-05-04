import { useTheme } from '../../context/ThemeProvider';
import { useWindowResize } from '../../hooks';

import { FiGithub } from 'react-icons/fi';
import { BiLinkExternal } from 'react-icons/bi';

// styles
import { Container, Flex, Grid, GridChild, Text } from '../../shared';

export const Project = ({
    alignment = 'right',
    image_url = 'https://avatars.githubusercontent.com/u/43089715?v=4',
    title = 'Project title',
    description = 'This project does the work that you do every day repeatedly, does saving you valueable time',
    tech_stacks = ['NextJS', 'Styled-Components'],
    project_links = {
        code: 'https://github.com/imrhlrvndrn?tab=repositories',
        live_demo: '',
    },
}) => {
    const [{ theme }] = useTheme();
    const { is_mobile } = useWindowResize({
        media_query_type: 'max',
        mobile: 600,
    });
    const project_alignment = {
        left: {
            image: '1/8',
            content: '6/-1',
        },
        right: {
            image: '6/-1',
            content: '1/8',
        },
        responsive: {
            image: '1/-1',
            content: '1/-1',
        },
    };
    alignment = is_mobile() ? 'right' : alignment;
    const content_alignment = () => (alignment === 'left' ? true : false);

    console.log('project_alignment => ', alignment);

    return (
        <Grid
            margin={is_mobile() ? '0 0 1rem 0' : '0 0 4rem 0'}
            columns="repeat(12, 1fr)"
            style={{ placeItems: 'center' }}
        >
            {!is_mobile() && (
                <GridChild column={project_alignment[alignment].image} row="1/1">
                    <img
                        src={image_url}
                        alt={title}
                        width="100%"
                        height="auto"
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center',
                            maxHeight: '420px',
                        }}
                    />
                </GridChild>
            )}
            <GridChild
                column={
                    is_mobile()
                        ? project_alignment['responsive'].content
                        : project_alignment[alignment].content
                }
                row="1/1"
                style={{
                    width: '100%',
                    height: '100%',
                    minHeight: '420px',
                    display: 'grid',
                    placeItems: 'center',
                    background: `${
                        is_mobile()
                            ? `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${image_url})`
                            : ''
                    }`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <Flex
                    className="content"
                    margin="auto 0"
                    direction="column"
                    justify="center"
                    align="center"
                    padding={is_mobile() ? '1rem' : '0'}
                >
                    {/* Project Title */}
                    <Text
                        size="heading2/large"
                        weight="bold"
                        align={content_alignment() ? 'right' : 'left'}
                        style={{
                            color: theme?.colors?.constants?.orange['800'],
                        }}
                    >
                        {title}
                    </Text>
                    {/* Project Description */}
                    <Container
                        padding={is_mobile() ? '0' : '1.5rem'}
                        margin="1rem 0"
                        style={{
                            backgroundColor: is_mobile()
                                ? 'transparent'
                                : theme?.colors?.background?.secondary,
                            borderRadius: '5px',
                        }}
                    >
                        <Text
                            is_mobile={is_mobile()}
                            size="body/large"
                            align={content_alignment() ? 'right' : 'left'}
                        >
                            {description}
                        </Text>
                    </Container>
                    {/* Project Tech Stacks */}
                    <Flex
                        width="70%"
                        margin={content_alignment() ? '0 0 0 auto' : '0 auto 0 0'}
                        wrap
                        justify={content_alignment() ? 'flex-end' : 'flex-start'}
                    >
                        {tech_stacks?.map((tech) => (
                            <Text
                                is_mobile={is_mobile()}
                                width="max-content"
                                size="body/large"
                                color="secondary"
                                margin={content_alignment() ? '0 0 0.5rem 1rem' : '0 1rem 0.5rem 0'}
                            >
                                {tech}
                            </Text>
                        ))}
                    </Flex>
                    {/* Project Links */}
                    <Flex
                        margin="1rem 0 0 0"
                        justify={content_alignment() ? 'flex-end' : 'flex-start'}
                    >
                        <a target="_blank" href={project_links?.code}>
                            <FiGithub
                                // is_mobile={is_mobile()}
                                color={theme?.colors?.text?.secondary}
                                size="25px"
                                style={{ margin: '0 1rem 0 0' }}
                            />
                        </a>
                        <a target="_blank" href={project_links?.live_demo}>
                            <BiLinkExternal
                                // is_mobile={is_mobile()}
                                color={theme?.colors?.text?.secondary}
                                size="25px"
                            />
                        </a>
                    </Flex>
                </Flex>
            </GridChild>
        </Grid>
    );
};
