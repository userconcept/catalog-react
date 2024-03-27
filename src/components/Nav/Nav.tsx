import NavList from '../NavList/NavList.tsx';

import styles from './Nav.module.scss';

function Nav() {
    return (
        <nav>
            <NavList className={styles.Nav__NavList} />
        </nav>
    );
}

export default Nav;
