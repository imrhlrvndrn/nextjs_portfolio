import Image from 'next/image';
import Link from 'next/link';
import { Flex, Text } from '../../shared';

export const FeaturedProject = ({ title = 'Project Title', cover_image, pathname = '/' }) => {
    return (
        <Link href={{ pathname }}>
            <a target="_blank">
                <Image
                    src={cover_image}
                    width="500px"
                    height="320px"
                    objectFit="cover"
                    objectPosition="center"
                />
                <Flex>
                    <Text size="heading4/large" weight="bold">
                        {title}
                    </Text>
                </Flex>
            </a>
        </Link>
    );
};
