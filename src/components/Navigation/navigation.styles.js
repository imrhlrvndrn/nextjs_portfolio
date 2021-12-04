import styled from 'styled-components';

export const NavigationBar = styled.nav`
    display: flex;
    padding: 2rem 10rem;
    justify-content: space-between;
    align-items: center;
`;

export const NavigationLogo = styled.div`
    font-weight: ${(props) => props.theme.fonts.weight.bold};
    font-size: ${(props) => props.theme.fonts.size.heading3.large};
`;

export const NavigationItemsContainer = styled.div`
    display: flex;
    width: max-content;
    align-items: center;
`;

export const NavigationItem = styled.div`
    padding: 0.5rem 1rem;
    margin-left: 2rem;
    font-size: ${(props) => props.theme.fonts.size.heading5.large};
    font-weight: ${(props) => props.theme.fonts.weight.semibold};
`;
