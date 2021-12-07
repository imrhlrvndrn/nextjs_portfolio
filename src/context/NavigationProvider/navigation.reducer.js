import { navigationItems } from '../../constants';

export const initialNavigationState = { navigationItems };

export const navigationReducers = (state, action) => {
    switch (action.type) {
        case 'SET_ROUTE': {
            const { path } = action.payload;
            return {
                ...state,
                navigationItems: state.navigationItems.map((item) =>
                    item.link === path
                        ? { ...item, is_active: true }
                        : { ...item, is_active: false }
                ),
            };
        }

        case 'CHANGE_ROUTE': {
            const { route_id } = action.payload;
            return {
                ...state,
                navigationItems: state.navigationItems.map((item) =>
                    item._id === route_id
                        ? { ...item, is_active: true }
                        : { ...item, is_active: false }
                ),
            };
        }

        default:
            return state;
    }
};
