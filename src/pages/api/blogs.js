import axios from 'axios';

const blogs = async (req, res) => {
    if (req.method === 'POST') {
        const query = `
            query ($username: String!){
                user(username: $username) {
                    publication {
                        posts(page: 0) {
                            title
                            brief
                            dateAdded
                            coverImage
                        }
                    }
                }
            }
        `;
        const { username } = req.query;

        try {
            const blog_posts = await axios.post(process.env.HASHNODE_API_ENDPOINT, {
                query,
                variables: { username },
                headers: {
                    Authorization: process.env.HASHNODE_PERSONAL_TOKEN,
                },
            });
            return res.json({ posts: blog_posts?.data?.data?.user?.publication?.posts });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'aaaahhhh!!!!' });
        }
    }
};

export default blogs;
