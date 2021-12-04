import styled, { css } from 'styled-components';

export const Button = styled.button`
    padding: 1rem 2rem;
    display: block;
    margin: ${(props) => props.margin || '0'};
    padding: ${(props) => props.padding || '1rem 2rem'};
    border-radius: ${(props) =>
        props.borderRadius ? props.borderRadius : '0'};
    transition: all 0.3s ease-in-out;
    background-color: ${(props) => props.theme.colors.constants.purple['600']};
    color: ${(props) => props.theme.colors.constants.text.light};

    &:hover {
        background-color: ${(props) =>
            props.theme.colors.constants.purple['800']};
    }

    ${(props) =>
        props.variant === 'secondary' &&
        css`
            background-color: transparent;
            color: ${(props) => props.theme.colors.constants.purple['800']};
            border: 1px solid ${props.theme.colors.constants.purple['800']};

            &:hover {
                border: 1px solid transparent;
                background-color: ${(props) =>
                    props.theme.colors.constants.purple['800']};
                color: ${(props) => props.theme.colors.constants.purple['50']};
            }
        `};
`;
