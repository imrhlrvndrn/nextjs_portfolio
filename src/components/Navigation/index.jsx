import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useNavigation, useTheme } from '../../context';

// styles
import { ToggleSwitch } from '../Buttons/Toggle';
import {
    NavigationBar,
    NavigationItem,
    NavigationItemsContainer,
    NavigationLogo,
} from './navigation.styles';

export const Navigation = () => {
    const router = useRouter();
    const [{ isDarkTheme }, themeDispatch] = useTheme();
    const [{ navigationItems }, navigationDispatch] = useNavigation();

    useEffect(() => {
        navigationDispatch({
            type: 'SET_ROUTE',
            payload: { path: router.pathname },
        });
    }, []);

    return (
        <NavigationBar>
            <NavigationLogo>
                <Link prefetch href="/">
                    <a>RR</a>
                </Link>
            </NavigationLogo>
            <NavigationItemsContainer>
                {navigationItems.map(({ _id, name, link, is_active }) => (
                    <NavigationItem
                        className={is_active ? 'active' : ''}
                        key={_id}
                        onClick={() =>
                            navigationDispatch({
                                type: 'CHANGE_ROUTE',
                                payload: { route_id: _id },
                            })
                        }
                    >
                        <Link prefetch href={link}>
                            <a>
                                {name}
                                {is_active}
                            </a>
                        </Link>
                    </NavigationItem>
                ))}
            </NavigationItemsContainer>
            <NavigationItemsContainer>
                <ToggleSwitch
                    onToggle={() => themeDispatch({ type: 'TOGGLE_THEME' })}
                    toggleState={isDarkTheme}
                />
            </NavigationItemsContainer>
        </NavigationBar>
    );
};
