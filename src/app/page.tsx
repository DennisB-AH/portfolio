import '@styles/globals.scss';

import { Text } from '@radix-ui/themes';

import css from './page.module.scss';

export default function Home() {
    return (
        <div className={css.root}>
            <Text>Welcome to my portfolio</Text>
        </div>
    );
}
