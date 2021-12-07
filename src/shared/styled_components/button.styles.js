import styled, { css } from 'styled-components';

export const Button = styled.button`
    padding: 1rem 2rem;
    display: block;
    margin: ${(props) => props.margin || '0'};
    padding: ${(props) => props.padding || '1rem 2rem'};
    border-radius: ${(props) =>
        props.borderRadius ? props.borderRadius : '0'};
    transition: all 0.3s ease-in-out;
    background-color: ${(props) => props.theme.colors.constants.purple['800']};

    * {
        color: ${(props) => props.theme.colors.constants.text.light};
    }

    &:hover {
        background-color: ${(props) =>
            props.theme.colors.constants.purple['800']};
        box-shadow: 0 0px 1.4rem 0px
            ${(props) => props.theme.colors.constants.purple['800']};
    }

    ${(props) =>
        props.variant === 'secondary' &&
        css`
            background-color: transparent;
            border: 2px solid ${props.theme.colors.constants.purple['800']};

            * {
                color: ${(props) => props.theme.colors.constants.purple['800']};
            }

            &:hover {
                background-color: transparent;
                box-shadow: 0 0 0 0 transparent;
            }
        `};
`;
