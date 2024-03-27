import { createElement, PropsWithChildren } from 'react';

import styles from './Title.module.scss';

type Props = {
    className?: string;
    level: string;
    size?: 'small' | 'middle' | 'large';
    hidden?: boolean;
}

function Title({
    className,
    level,
    size,
    children,
    hidden
}: PropsWithChildren<Props>) {
    const cnBlock = hidden ? styles.Title_hidden : styles.Title;
    const cnModifier = styles['Title_' + size];
    const cnMix = className;

    const cn = [cnBlock, cnModifier, cnMix].filter(v => !!v).join(' ');

    return createElement(
        `h${level}`,
        { className: cn },
        children
    );
}

export default Title;
