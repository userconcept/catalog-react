import Title from '../Title/Title.tsx';

import styles from './NotFound.module.scss';

function NotFound({ text }: { text: string; }) {
    return (
        <section className={styles.NotFound}>
            <Title
                className={styles.NotFound__Title}
                level="1"
                size="large"
            >
                {text}
            </Title>
        </section>
    );
}

export default NotFound;
