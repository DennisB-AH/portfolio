'use client';
import { type FC, useEffect, useState } from 'react';
import { Spinner } from '@radix-ui/themes';
import ReactMarkdown from 'react-markdown';

import css from './readme.module.scss';

export const Readme: FC = () => {
    const [readme, setReadme] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchReadme = async () => {
            setLoading(true);
            try {
                const res = await fetch(
                    'https://raw.githubusercontent.com/DennisB-AH/dennisb-ah/main/README.md',
                );
                const md = await res.text();
                setReadme(md);
            } finally {
                setLoading(false);
            }
        };
        fetchReadme().catch(console.error);
    }, []);

    return (
        <div className={css.root}>
            {loading ? <Spinner /> : <ReactMarkdown>{readme}</ReactMarkdown>}
        </div>
    );
};
