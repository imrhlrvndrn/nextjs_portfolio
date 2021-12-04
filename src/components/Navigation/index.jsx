import {
    NavigationBar,
    NavigationItem,
    NavigationItemsContainer,
    NavigationLogo,
} from './navigation.styles';

export const Navigation = () => {
    return (
        <NavigationBar>
            <NavigationLogo>Rahul Ravindran</NavigationLogo>
            <NavigationItemsContainer>
                <NavigationItem>About me</NavigationItem>
                <NavigationItem>Projects</NavigationItem>
                <NavigationItem>Blogs</NavigationItem>
            </NavigationItemsContainer>
        </NavigationBar>
    );
};
