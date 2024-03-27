import ContactLink from '../ContactLink/ContactLink.tsx';

import { contact } from '../../data/contact.data.ts';

import styles from './ContactList.module.scss';

function ContactList({ className }: { className: string; }) {
    const renderItems = contact.map(item =>
        <li
            className={styles.ContactList__item}
            key={item.id}
        >
            <ContactLink
                className={styles.ContactList__ContactLink}
                href={item.href}
                rel={item.rel}
                target={item.target}
            >
                {item.text}
            </ContactLink>
        </li>
    );

    return (
        <ul className={[
            styles.ContactList,
            className ? className : ''
        ].join(' ')}>
            {renderItems}
        </ul>
    );
}

export default ContactList;
