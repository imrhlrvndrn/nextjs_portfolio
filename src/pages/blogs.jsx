import { BasicLayout } from '../layouts';
import { useWindowResize } from '../hooks';
import axios from 'axios';

// styles
import { Grid, Text } from '../shared';
import { GridChild } from '../shared/styled_components/grid.styles';

// components
import { Footer, Navigation, Blog } from '../components';

const Blogs = ({ blog_posts }) => {
    const {
        size: { width: _width },
        is_tablet,
        is_mobile,
    } = useWindowResize({ tablet: 1000, mobile: 600 });

    return (
        <BasicLayout title="Rahul Ravindran | Blogs">
            <Grid
                columns="repeat(12, 1fr)"
                margin={is_tablet() ? '0 2rem' : '0 5rem'}
                area={
                    is_tablet()
                        ? "'nav nav nav nav nav nav nav nav nav nav nav nav''. hero hero hero hero hero hero hero hero hero hero .''blogs blogs blogs blogs blogs blogs blogs blogs blogs blogs blogs blogs' 'footer footer footer footer footer footer footer footer footer footer footer footer'"
                        : "'. nav nav nav nav nav nav nav nav nav nav .''. . hero hero hero hero hero hero hero hero . .''. blogs blogs blogs blogs blogs blogs blogs blogs blogs blogs .' '. footer footer footer footer footer footer footer footer footer footer .'"
                }
            >
                <Navigation />
                <GridChild gridArea="hero" margin={is_mobile() ? '4rem 0' : '8rem 0'}>
                    <Text align="center" size="display1/large" weight="extrabold">
                        Some things I've shared w/ others 🤓
                    </Text>
                </GridChild>
                <GridChild margin="0 0 4 rem 0" gridArea="blogs">
                    {blog_posts?.map(({ title, brief, dateAdded, coverImage }) => (
                        <Blog
                            title={title}
                            brief={brief}
                            date={dateAdded}
                            cover_image={coverImage}
                        />
                    ))}
                </GridChild>
                <GridChild gridArea="footer">
                    <Footer />
                </GridChild>
            </Grid>
        </BasicLayout>
    );
};

export const getStaticProps = async (context) => {
    const blogs = await axios.post(
        `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/blogs?username=imrhlrvndrn`
    );

    return { props: { blog_posts: blogs?.data?.posts } };
};

export default Blogs;
