import Nav from '../Nav/Nav.tsx';

import styles from './Header.module.scss';

function Header() {
    return (
        <header className={styles.Header}>
            <Nav />
        </header>
    );
}

export default Header;
