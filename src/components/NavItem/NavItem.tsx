import { PropsWithChildren } from 'react';

import { useMatch, NavLink } from 'react-router-dom';

import styles from './NavItem.module.scss';

type Props = {
    className: string;
    href: string;
}

function NavItem({
    className,
    href,
    children
}: PropsWithChildren<Props>) {
    const match = useMatch(href);

    return (
        <li className={[
            styles.NavItem,
            className,
            match ? styles.NavItem_active : ''
        ].filter(v => !!v).join(' ')}>
            <NavLink className={styles.NavItem__link} to={href}>
                {children}
            </NavLink>
        </li>
    );
}

export default NavItem;
