import { Fragment } from 'react';
import Head from 'next/head';

export const BasicLayout = ({
    children,
    title = 'Rahul Ravindran',
    meta = { description: 'Rahul Ravindran is a web developer' },
}) => {
    return (
        <Fragment>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content={meta.description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>{children}</main>
        </Fragment>
    );
};
