import type { ReactNode } from 'react';
import { Footer } from '@components/footer/footer';
import { Header } from '@components/header/header';
import { Theme } from '@radix-ui/themes';
import type { Metadata } from 'next';

import '@styles/globals.scss';

export const metadata: Metadata = {
    title: 'Dennis Bleeker - Portfolio',
    description:
        'My personal portfolio website showcasing my projects and skills.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="body">
                <Theme>
                    <div className="main">
                        <Header />
                        <div className="content">{children}</div>
                        <Footer />
                    </div>
                </Theme>
            </body>
        </html>
    );
}
