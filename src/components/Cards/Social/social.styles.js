import styled from 'styled-components';

export const SocialCard = styled.a`
    padding: 2rem;
    cursor: pointer;
    transition: 0.3s all ease-in-out;
    color: ${(props) => props.theme.colors.constants.text.light};
    border: 4px solid ${(props) => props.theme.colors.background.secondary};

    &:hover {
        border: 4px solid
            ${(props) => props.theme.colors.constants.purple['800']};
    }
`;

export const SocialCardContainer = styled.div`
    position: fixed;
    z-index: 100;
    top: 100px;
    left: 100px;

    width: 200px;
    height: 200px;
    transform: rotateX(90deg);
`;
