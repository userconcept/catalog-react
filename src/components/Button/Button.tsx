import {
    ComponentProps,
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    PropsWithChildren
} from 'react';

import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
}

type Props = ComponentProps<typeof Link>
    | AnchorProps
    | ButtonHTMLAttributes<HTMLButtonElement>

function Button({ className, children, ...props}: PropsWithChildren<Props>) {
    if ('to' in props) {
        return (
            <Link className={[
                styles.Button,
                className ? className : ''
            ].join(' ')} {...props}>
                {children}
            </Link>
        );
    }

    if ('href' in props) {
        return (
            <a className={[
                styles.Button,
                className ? className : ''
            ].join(' ')} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button className={[
            styles.Button,
            className ? className : ''
        ].join(' ')} {...props}>
            {children}
        </button>
    );
}

export default Button;
