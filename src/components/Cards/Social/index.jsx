// styles
import { Text } from '../../../shared';
import { SocialCard } from './social.styles';

export const Social = ({ name, redirectTo }) => {
    return (
        <SocialCard
            href={redirectTo}
            target="_blank"
            referrerPolicy="no-referrer"
        >
            <Text align="center" size="heading3/large" weight="semibold">
                {name}
            </Text>
        </SocialCard>
    );
};
