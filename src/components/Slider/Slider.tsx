import SliderList from '../SliderList/SliderList.tsx';

import styles from './Slider.module.scss';

function Slider({ className }: { className: string; }) {
    return (
        <div className={className ? className : ''}>
            <SliderList className={styles.Slider__SliderList} />
        </div>
    );
}

export default Slider;
