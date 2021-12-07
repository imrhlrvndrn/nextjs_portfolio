import styled from 'styled-components';

export const CardContainer = styled.div`
    width: max-content;
    background-color: ${(props) => props.theme.colors.background.secondary};
    border-radius: 10px;
    padding: 1rem;
`;
