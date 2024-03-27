import NavItem from '../NavItem/NavItem.tsx';

import { nav } from '../../data/nav.data.ts';

import styles from './NavList.module.scss';

function NavList({ className }: { className: string; }) {
    const renderItems = nav.map(item =>
        <NavItem
            className={styles.NavList__NavItem}
            href={item.href}
            key={item.id}
        >
            {item.text}
        </NavItem>
    );

    return (
        <ul className={[
            styles.NavList,
            className ? className : ''
        ].join(' ')}>
            {renderItems}
        </ul>
    );
}

export default NavList;
