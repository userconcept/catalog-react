import { PropsWithChildren } from 'react';

import styles from './ContactLink.module.scss';

type Props = {
    className: string;
    href: string;
    rel?: string;
    target?: string;
}

function ContactLink({
    className,
    href,
    rel,
    target,
    children
}: PropsWithChildren<Props>) {
    return (
        <a
            className={[
                styles.ContactLink,
                className ? className : ''
            ].join(' ')}
            href={href}
            rel={rel}
            target={target}
        >
            <span className={styles.ContactLink__text}>
                {children}
            </span>
        </a>
    );
}

export default ContactLink;
