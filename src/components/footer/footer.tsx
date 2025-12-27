import type { FC } from 'react';
import { Link, Separator, Text } from '@radix-ui/themes';

import css from './footer.module.scss';

export const Footer: FC = () => {
    const footerInfo = [
        {
            title: 'About me',
            contents: ['Passionate devops engineer.'],
        },
        {
            title: 'Location',
            contents: ['Amsterdam'],
        },
        {
            title: 'Contact',
            contents: ['Email: dennisbleeker50@gmail.com'],
        },
    ];
    return (
        <footer className={css.root}>
            <div className={css.infoSection}>
                {footerInfo.map(info => (
                    <div key={info.title} className={css.bottomSection}>
                        <Text>{info.title}</Text>
                        {info.contents.map(content => (
                            <Text key={content}>{content}</Text>
                        ))}
                    </div>
                ))}
            </div>
            <Separator my="3" size="4" />
            <div className={css.bottom}>
                <div className={css.bottomSection}>
                    <Text size="1">
                        © COPYRIGHT {new Date().getFullYear()} Dennis Bleeker.
                    </Text>
                    <Text size="1">
                        <Link href="/" highContrast>
                            Algemene voorwaarden
                        </Link>{' '}
                        | Website made by Dennis Bleeker
                    </Text>
                </div>
            </div>
        </footer>
    );
};
