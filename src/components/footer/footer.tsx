import type { FC } from 'react';
import { Text } from '@radix-ui/themes';

import css from './footer.module.scss';

export const Footer: FC = () => {
    return (
        <footer className={css.root}>
            <div className={css.bottom}>
                <Text size="1" weight={'bold'}>
                    © {new Date().getFullYear()} Dennis Bleeker
                </Text>
            </div>
        </footer>
    );
};
