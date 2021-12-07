import styled from 'styled-components';

export const ToggleSwitch = styled.div`
    cursor: pointer;
    margin: ${(props) => props.margin || '0'};
    padding: ${(props) => props.padding || '0'};
    border-radius: ${(props) => props.borderRadius || '0'};
    color: ${(props) => props.theme.colors.text.primary};
    background-color: ${(props) =>
        props.theme.colors.background[props.background]};
`;
