import type { ElementType } from 'react';
import {
    IconBrandGithub,
    IconBrandGmail,
    IconBrandLinkedin,
} from '@tabler/icons-react';

interface ContactInfo {
    name: string;
    link: string;
    icon: ElementType;
    value?: string;
}

export const CONTACT_INFO: ContactInfo[] = [
    {
        name: 'GitHub',
        link: 'https://github.com/DennisB-AH',
        icon: IconBrandGithub,
    },
    {
        name: 'Email',
        link: 'mailto:dennisbleeker50@gmail.com',
        icon: IconBrandGmail,
        value: 'dennisbleeker50@gmail.com',
    },
    {
        name: 'Linkedin',
        link: 'https://linkedin.com/in/bleeker-dennis',
        icon: IconBrandLinkedin,
    },
];
