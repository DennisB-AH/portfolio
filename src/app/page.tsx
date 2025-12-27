import '@styles/globals.scss';

import { Readme } from '@components/readme/readme';
import { CONTACT_INFO } from '@constants/contact-info';
import { IconButton, Text } from '@radix-ui/themes';

import css from './page.module.scss';

export default function Home() {
    return (
        <div className={css.root}>
            <section className={css.intro}>
                <Text>Under construction :)</Text>
                <Readme />
            </section>
            <section className={css.aboutme}></section>
            <section className={css.projects}></section>
            <section className={css.skills}></section>
            <section className={css.experience}></section>
            <section className={css.contact}>
                {CONTACT_INFO.map(entry => (
                    <a
                        key={entry.name}
                        href={entry.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <IconButton className={css.iconButton} color={'red'}>
                            <entry.icon />
                            {entry.name}
                        </IconButton>
                    </a>
                ))}
            </section>
        </div>
    );
}
