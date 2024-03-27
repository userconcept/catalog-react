import Nav from '../Nav/Nav.tsx';
import Copyright from '../Copyright/Copyright.tsx';

import styles from './Footer.module.scss';

function Footer() {
    return (
        <footer className={styles.Footer}>
            <div className={styles.Footer__text}>userconcept</div>
            <Nav />
            <Copyright className={styles.Footer__Copyright} />
        </footer>
    );
}

export default Footer;
