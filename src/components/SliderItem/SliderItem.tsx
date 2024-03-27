import Picture from '../Picture/Picture.tsx';

import styles from './SliderItem.module.scss';

type Props = {
    className: string;
    name: string;
    title: string;
}

function SliderItem({ className, name, title }: Props) {
    const imageUrl = 'https://userconceptart.com';

    const imageSizes = [
        '100vw'
    ].join(', ');

    const imageSrcSetAvif = [
        `${imageUrl}/img/${name}_410.avif 410w`,
        `${imageUrl}/img/${name}_820.avif 820w`,
        `${imageUrl}/img/${name}_1230.avif 1230w`,
        `${imageUrl}/img/${name}_1640.avif 1640w`,
        `${imageUrl}/img/${name}_2050.avif 2050w`,
        `${imageUrl}/img/${name}_2460.avif 2460w`,
        `${imageUrl}/img/${name}_2870.avif 2870w`,
        `${imageUrl}/img/${name}_3280.avif 3280w`,
        `${imageUrl}/img/${name}_3690.avif 3690w`,
        `${imageUrl}/img/${name}_4100.avif 4100w`,
        `${imageUrl}/img/${name}_6150.avif 6150w`,
        `${imageUrl}/img/${name}_7800.avif 7800w`
    ].join(', ');

    const imageSrcSetWebp = [
        `${imageUrl}/img/${name}_410.webp 410w`,
        `${imageUrl}/img/${name}_820.webp 820w`,
        `${imageUrl}/img/${name}_1230.webp 1230w`,
        `${imageUrl}/img/${name}_1640.webp 1640w`,
        `${imageUrl}/img/${name}_2050.webp 2050w`,
        `${imageUrl}/img/${name}_2460.webp 2460w`,
        `${imageUrl}/img/${name}_2870.webp 2870w`,
        `${imageUrl}/img/${name}_3280.webp 3280w`,
        `${imageUrl}/img/${name}_3690.webp 3690w`,
        `${imageUrl}/img/${name}_4100.webp 4100w`,
        `${imageUrl}/img/${name}_6150.webp 6150w`,
        `${imageUrl}/img/${name}_7800.webp 7800w`
    ].join(', ');

    const imageSrcSetJpg = [
        `${imageUrl}/img/${name}_410.jpg 410w`,
        `${imageUrl}/img/${name}_820.jpg 820w`,
        `${imageUrl}/img/${name}_1230.jpg 1230w`,
        `${imageUrl}/img/${name}_1640.jpg 1640w`,
        `${imageUrl}/img/${name}_2050.jpg 2050w`,
        `${imageUrl}/img/${name}_2460.jpg 2460w`,
        `${imageUrl}/img/${name}_2870.jpg 2870w`,
        `${imageUrl}/img/${name}_3280.jpg 3280w`,
        `${imageUrl}/img/${name}_3690.jpg 3690w`,
        `${imageUrl}/img/${name}_4100.jpg 4100w`,
        `${imageUrl}/img/${name}_6150.jpg 6150w`,
        `${imageUrl}/img/${name}_7800.jpg 7800w`
    ].join(', ');

    const imageSrc = `${imageUrl}/img/${name}_410.jpg`;

    return (
        <li className={[
            styles.SliderItem,
            className ? className : ''
        ].join(' ')}>
            <Picture
                className={styles.SliderItem__Picture}
                srcSetAvif={imageSrcSetAvif}
                srcSetWebp={imageSrcSetWebp}
                srcSetJpg={imageSrcSetJpg}
                sizes={imageSizes}
                src={imageSrc}
                alt={title}
            />
        </li>
    );
}

export default SliderItem;
