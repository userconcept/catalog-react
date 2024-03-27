import Title from '../Title/Title.tsx';
import Slider from '../Slider/Slider.tsx';

import styles from './Home.module.scss';

function Home() {
    return (
        <section className={styles.Home}>
            <Title
                level="1"
                hidden={true}
            >
                userconcept NFT
            </Title>
            <Slider className={styles.Home__Slider} />
        </section>
    );
}

export default Home;
