import React, {
    useState,
    useEffect,
    useRef,
    ChangeEvent
} from 'react';

import styles from './Select.module.scss';

type PropsSelect = {
    className: string;
    id: string;
    name: string;
    label: string;
    options: PropsOption[];
    onChange: (value: string) => void;
}

type PropsSelectItem = {
    className: string;
    item: PropsOption;
    onClick: React.MouseEventHandler<HTMLElement> &
    React.KeyboardEventHandler<HTMLElement>;
}

type PropsOption = {
    value: string;
    title: string;
}

function SelectItem({
    className,
    item,
    onClick
}: PropsSelectItem) {
    const itemRef = useRef<HTMLLIElement>(null);

    const handleEnterPress = (e: React.KeyboardEvent<HTMLElement>) => {
        if ((document.activeElement === itemRef.current) && e.key === 'Enter') {
            onClick(e);
        }
    }

    return (
        <li
            className={[
                styles.SelectItem,
                className ? className : ''
            ].join(' ')}
            data-value={item.value}
            onClick={onClick}
            onKeyDown={handleEnterPress}
            tabIndex={0}
            ref={itemRef}
        >
            {item.title}
        </li>
    );
}

function Select({
    className,
    id,
    name,
    label,
    options,
    onChange
}: PropsSelect) {
    const [isOpen, setIsOpen] = useState(false);
    const [item, setItem] = useState(options[0]);

    const rootRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (e: MouseEvent) => {
        if (e.target instanceof Node && !rootRef.current?.contains(e.target)) {
            setIsOpen(false);
        }
    }

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        for (let item of options) {
            if (item.value == e.target.value) {
                setItem(item);
            }
        }
    }

    const handleOpen = () => {
        setIsOpen(prev => !prev);
    }

    const handleClick = (
        e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>
    ) => {
        for (let item of options) {
            if (item.value == e.currentTarget.dataset.value) {
                setItem(item);
                setIsOpen(false);
                onChange(item.value);
            }
        }
    }

    const handleKeyDownEnter = (e: React.KeyboardEvent<HTMLElement>) => {
        if (e.key === 'Enter') {
            setIsOpen(prev => !prev);
        }
    }

    useEffect(() => {
        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        }
    }, []);

    return (
        <div
            className={[
                styles.Select,
                className ? className : ''
            ].join(' ')}
            ref={rootRef}
        >
            <label
                className={styles.Select__label}
                id={id}
            >
                {label}
            </label>
            <select
                className={styles.Select__select}
                name={name}
                value={item.value}
                onChange={handleChange}
                tabIndex={-1}
                aria-hidden={true}
            >
                {options.map((item, index) => (
                    <option
                        value={item.value}
                        key={index}
                    >
                        {item.title}
                    </option>
                ))}
            </select>
            <div
                className={styles.Select__title}
                aria-labelledby={id}
                onClick={handleOpen}
                onKeyDown={handleKeyDownEnter}
                tabIndex={0}
            >
                {item.title}
            </div>
            <ul className={[
                styles.Select__list,
                isOpen ? styles.Select__list_active : ''
            ].join(' ')}>
                {options.map((item, index) => (
                    <SelectItem
                        className={styles.Select__SelectItem}
                        item={item}
                        onClick={handleClick}
                        key={index}
                    />
                ))}
            </ul>
        </div>
    );
}

export default Select;
