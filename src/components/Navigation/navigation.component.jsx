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
            {!is_mobile() && (
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
                            <Link href={link}>
                                <a>{name}</a>
                            </Link>
                        </NavigationItem>
                    ))}
                </NavigationItemsContainer>
            )}
            <NavigationItemsContainer>
                <ToggleSwitch
                    onToggle={() => themeDispatch({ type: 'TOGGLE_THEME' })}
                    toggleState={isDarkTheme}
                />
                {is_mobile() && (
                    <TbMenu
                        size={24}
                        style={{ margin: '0 0 0 2rem' }}
                        color={theme?.colors?.text?.primary}
                    />
                )}
            </NavigationItemsContainer>
        </NavigationBar>
    );
};
