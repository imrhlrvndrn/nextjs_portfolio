import { useEffect, useState } from 'react';

export const useWindowResize = ({
    media_query_type = 'max',
    tablet = 1000,
    mobile = 600,
}) => {
    const [windowSize, setWindowSize] = useState({
        width: null,
        height: null,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const is_tablet = () => {
        if (media_query_type === 'max')
            return windowSize?.width < tablet ? true : false;
        else if (media_query_type === 'min')
            return windowSize?.width > tablet ? true : false;
    };
    const is_mobile = () => {
        if (media_query_type === 'max')
            return windowSize?.width < mobile ? true : false;
        if (media_query_type === 'min')
            returnwindowSize?.width > mobile ? true : false;
    };

    return { size: windowSize, is_tablet, is_mobile };
};
