import { BasicLayout } from '../layouts';
import { useWindowResize } from '../hooks';
import { blogs } from '../constants/blogs.constant';
import axios from 'axios';

// styles
import { Grid, Text } from '../shared';
import { GridChild } from '../shared/styled_components/grid.styles';

// components
import { Footer, Navigation, Blog } from '../components';
import { useEffect, useState } from 'react';

const Blogs = () => {
    const {
        size: { width: _width },
        is_tablet,
        is_mobile,
    } = useWindowResize({ tablet: 1000, mobile: 600 });
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetch_blogs = async () => {
            try {
                const blog_posts = await axios.post(
                    `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/blogs?username=imrhlrvndrn`
                );

                console.log(blog_posts);
                return blog_posts;
            } catch (error) {
                console.error(error);
            }
        };

        (async () => {
            const blogs = await fetch_blogs();
            setBlogs(() => blogs?.data?.posts);
        })();
    }, []);

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
                    {blogs?.map(({ title, brief, dateAdded, coverImage }) => (
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

export default Blogs;
