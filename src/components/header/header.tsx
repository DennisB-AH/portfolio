import type { FC } from 'react';
import { Link } from '@radix-ui/themes';
import Image from 'next/image';

import css from './header.module.scss';

export const Header: FC = () => {
    return (
        <header className={css.root}>
            <meta
                name="viewport"
                content="minimum-scale=1.0, initial-scale=1.0, width=device-width, user-scalable=no"
            />
            <div className={css.imageContainer}>
                <Link href={'/'}>
                    <Image src="/next.svg" alt="next logo" fill={true} />
                </Link>
            </div>
        </header>
    );
};
