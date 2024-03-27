import Title from '../Title/Title.tsx';
import Text from '../Text/Text.tsx';
import ContactList from '../ContactList/ContactList.tsx';

import styles from './Contact.module.scss';

function Contact() {
    return (
        <section className={styles.Contact}>
            <Title
                className={styles.Contact__Title}
                level="1"
                size="large"
            >
                Contact
            </Title>
            <Text className={styles.Contact__Text}>
                Contact me if you need project in web / digital / marketing sphere or if you are interested in other business interaction, collaboration or buying NFTs.
            </Text>
            <ContactList className={styles.Contact__ContactList} />
        </section>
    );
}

export default Contact;
