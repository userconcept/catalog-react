import SliderItem from '../SliderItem/SliderItem.tsx';

import { slider } from '../../data/slider.data.ts';

import styles from './SliderList.module.scss';

function SliderList({ className }: { className: string; }) {
    const renderItems = slider.map(item =>
        <SliderItem
            className={styles.SliderList__SliderItem}
            name={item.name}
            title={item.title}
            key={item.id}
        />
    );

    return (
        <ul className={[
            styles.SliderList,
            className ? className : ''
        ].join(' ')}>
            {renderItems}
        </ul>
    );
}

export default SliderList;
