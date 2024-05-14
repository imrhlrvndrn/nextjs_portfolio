import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { TbMenu } from 'react-icons/tb';
import { useWindowResize } from '../../hooks';
import { useNavigation, useTheme } from '../../context';

// styles
import { ToggleSwitch } from '../Buttons/Toggle/toggle.component';
import {
    NavigationBar,
    NavigationItem,
    NavigationItemsContainer,
    NavigationLogo,
} from './navigation.styles';

export const Navigation = () => {
    const router = useRouter();
    const { is_mobile } = useWindowResize({});
    const [{ isDarkTheme, theme }, themeDispatch] = useTheme();
    const [{ navigationItems }, navigationDispatch] = useNavigation();

    useEffect(() => {
        navigationDispatch({
            type: 'SET_ROUTE',
            payload: { path: router?.pathname },
        });

        console.log('NextJS router obj => ', router);
    }, []);

    const change_route = (_id, link) => {
        navigationDispatch({
            type: 'CHANGE_ROUTE',
            payload: { route_id: _id },
        });
        router.push(link);
    };

    return (
        <NavigationBar>
            <NavigationLogo>
                <Link prefetch href="/">
                    <a>RR</a>
                </Link>
            </NavigationLogo>
            {/* {!is_mobile() && ( */}
                <NavigationItemsContainer>
                    {navigationItems.map(({ _id, name, link, is_active }) => (
                        <NavigationItem
                            className={is_active ? 'active' : ''}
                            key={_id}
                            onClick={() => change_route(_id, link)}
                        >
                            {name}
                        </NavigationItem>
                    ))}
                </NavigationItemsContainer>
            {/* )} */}
            <NavigationItemsContainer>
                <ToggleSwitch
                    onToggle={() => themeDispatch({ type: 'TOGGLE_THEME' })}
                    toggleState={isDarkTheme}
                />
                {/* {is_mobile() && (
                    <TbMenu
                        size={24}
                        style={{ margin: '0 0 0 2rem' }}
                        color={theme?.colors?.text?.primary}
                    />
                )} */}
            </NavigationItemsContainer>
        </NavigationBar>
    );
};

const NavLink = ({ children, href }) => {
    return (
        <Link href={href} onClick={() => console.log('Navlink was clicked')}>
            {children}
        </Link>
    );
};
