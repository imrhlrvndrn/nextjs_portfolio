import styled from 'styled-components';

export const NavigationBar = styled.nav`
    top: 0;
    display: flex;
    grid-area: nav;
    padding: 2rem 0;
    position: sticky;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props) => props.theme.colors.background.primary};
`;

export const NavigationLogo = styled.div`
    a {
        letter-spacing: 10px;
        font-weight: ${(props) => props.theme.fonts.weight.bold};
        font-size: ${(props) => props.theme.fonts.size.heading3.large};
    }
`;

export const NavigationItemsContainer = styled.div`
    display: flex;
    width: max-content;
    align-items: center;
`;

export const NavigationItem = styled.div`
    position: relative;
    padding: 0.5rem 1rem;
    margin-left: 2rem;
    font-size: ${(props) => props.theme.fonts.size.heading5.large};
    transition: all 0.3s ease-in-out;
    border-bottom: 2px solid transparent;

    &:first-of-type {
        margin-left: 0;
    }

    &.active {
        a {
            font-weight: ${(props) => props.theme.fonts.weight.extrabold};
        }

        &::before {
            opacity: 1;
        }
    }

    &::before {
        opacity: 0;
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: ${(props) => props.theme.colors.text.primary};
        transition: 0.3s all ease-in-out;
    }

    &:hover {
        cursor: pointer;

        a {
            font-weight: ${(props) => props.theme.fonts.weight.extrabold};
        }
    }
`;
