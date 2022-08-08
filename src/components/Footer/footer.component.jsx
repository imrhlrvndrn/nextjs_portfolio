import { Fragment } from 'react';
import { Flex, Text } from '../../shared';
import { Button } from '../../shared/styled_components/button.styles';

export const Footer = () => {
    return (
        <Flex margin="1rem 0 2rem 0">
            <Text
                as="h1"
                margin="0 1rem 0 0"
                size="heading3/large"
                weight="semibold"
            >
                Want me building stuff for you? Hit me up on LinkedIn
            </Text>
            <Button borderRadius="0.5rem">
                <Text size="heading5/large">LinkedIn</Text>
            </Button>
        </Flex>
    );
};
