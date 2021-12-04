import { Card } from '../components';
import { BasicLayout } from '../layouts';
import { Container, Text } from '../shared';
import { Button } from '../shared/styled_components/button.styles';

export default function Home() {
    return (
        <BasicLayout>
            <Container>
                <Text
                    as="h1"
                    margin="4rem auto 0 auto"
                    align="center"
                    size="display1/large"
                    weight="extrabold"
                >
                    I help turn startups and designers into superheroes
                </Text>
                <Text
                    as="h2"
                    width="60%"
                    align="center"
                    weight="semibold"
                    color="secondary"
                    size="heading4/large"
                    margin="1rem auto 0 auto"
                >
                    Hi it’s Mizko here. I'm the Founder of{' '}
                    <Text as="span" color="primary" weight="extrabold">
                        Designership
                    </Text>{' '}
                    and MizkoMedia. Advisor @Antler and Educator @YouTube.
                </Text>
                <Button margin="2rem auto 0 auto">
                    <Text size="heading4/large" weight="semibold">
                        Get in touch
                    </Text>
                </Button>
            </Container>
        </BasicLayout>
    );
}
