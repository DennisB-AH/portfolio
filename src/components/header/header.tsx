import type { FC } from 'react';
import { CONTACT_INFO } from '@constants/contact-info';
import { Button, Heading, Link } from '@radix-ui/themes';

import css from './header.module.scss';

export const Header: FC = () => {
    return (
        <header className={css.root}>
            <meta
                name="viewport"
                content="minimum-scale=1.0, initial-scale=1.0, width=device-width, user-scalable=no"
            />
            <div className={css.titleContainer}>
                <Link href={'/'}>
                    <Heading>Dennis Bleeker</Heading>
                </Link>
            </div>
            <section className={css.contact}>
                {CONTACT_INFO.map(entry => (
                    <a
                        key={entry.name}
                        href={entry.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button className={css.button} variant="solid">
                            <entry.icon />
                            {entry.name}
                        </Button>
                    </a>
                ))}
            </section>
        </header>
    );
};
