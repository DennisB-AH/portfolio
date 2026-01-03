import '@styles/globals.scss';

import { Readme } from '@components/readme/readme';
import { Text } from '@radix-ui/themes';

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
        </div>
    );
}
