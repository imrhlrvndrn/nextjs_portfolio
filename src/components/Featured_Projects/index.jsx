import Image from 'next/image';
import { Fragment } from 'react';
import { Container, Flex, Text } from '../../shared';

export const FeaturedProject = ({ title = 'Project Title', cover_image }) => {
    return (
        <Fragment>
            {/* <img
                // width={556}
                height={418}
                src={cover_image}
                alt="Spotify Project Cover"
            /> */}

            <Container
                margin="0 0 1rem 0"
                title="Project Cover"
                style={{
                    backgroundPosition: 'center',
                    backgroundImage: `url(${cover_image})`,
                    backgroundSize: 'cover',
                    height: '420px',
                }}
            ></Container>
            <Flex justify="between">
                <Text size="heading4/large" weight="bold">
                    {title}
                </Text>
            </Flex>
        </Fragment>
    );
};
