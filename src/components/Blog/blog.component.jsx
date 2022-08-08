import { useWindowResize } from '../../hooks';
import { Text, Flex, Grid, GridChild } from '../../shared';

export const Blog = ({
    title = 'Blog title',
    brief = '',
    date = '',
    cover_image = '/featured_project_netflix.jpg',
}) => {
    const { is_mobile } = useWindowResize({
        media_query_type: 'max',
        mobile: 600,
    });

    return (
        <Grid columns={is_mobile() ? '1fr' : '229px 1fr'} margin="0 0 1rem 0">
            <GridChild>
                <img
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                        borderRadius: '5px',
                    }}
                    width={is_mobile() ? '100%' : 'max-content'}
                    height={is_mobile() ? 'auto' : '120'}
                    src={cover_image}
                    alt={title}
                />
            </GridChild>
            <GridChild>
                <Flex
                    direction="column"
                    style={{
                        flexGrow: 1,
                    }}
                >
                    <Text as="h2" size="heading3/large" weight="semibold">
                        {title}
                    </Text>
                    <Text color="secondary">
                        {brief.slice(0, 200)}
                        ...
                    </Text>
                </Flex>
            </GridChild>
        </Grid>
    );
};
