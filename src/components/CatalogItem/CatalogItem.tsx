import { Link } from 'react-router-dom';

import Picture from '../Picture/Picture.tsx';
import Title from '../Title/Title.tsx';
import ButtonLike from '../ButtonLike/ButtonLike.tsx';

import { ProductsItem } from '../../types/products.types.ts';

import styles from './CatalogItem.module.scss';

type Props = {
    className: string;
    product: [string, ProductsItem];
}

function CatalogItem({ className, product }: Props) {
    const imageUrl = 'https://userconceptart.com';

    const [name, item] = product;

    const imageSizes = [
        '(min-width: 1200px) calc(25vw - 2rem)',
        '(min-width: 600px) calc(50vw - 2rem)',
        '(min-width: 450px) calc(100vw - 2rem)',
        '91.1111111111vw'
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
        `${imageUrl}/img/${name}_4100.avif 4100w`
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
        `${imageUrl}/img/${name}_4100.webp 4100w`
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
        `${imageUrl}/img/${name}_4100.jpg 4100w`
    ].join(', ');

    const imageSrc = `${imageUrl}/img/${name}_410.jpg`;

    return (
        <li className={[
            styles.CatalogItem,
            className ? className : ''
        ].join(' ')}>
            <Link
                className={styles.CatalogItem__link}
                to={name}
            >
                <Picture
                    className={styles.CatalogItem__Picture}
                    srcSetAvif={imageSrcSetAvif}
                    srcSetWebp={imageSrcSetWebp}
                    srcSetJpg={imageSrcSetJpg}
                    sizes={imageSizes}
                    src={imageSrc}
                    alt={item.title}
                />
                <Title
                    className={styles.CatalogItem__Title}
                    level="2"
                    size="middle"
                >
                    {item.title}
                </Title>
                <div className={styles.CatalogItem__text}>
                    Category: {item.category}
                </div>
                <div className={styles.CatalogItem__text}>
                    Popularity: {item.categories.popularity}
                </div>
            </Link>
            <ButtonLike className={styles.CatalogItem__ButtonLike} />
        </li>
    );
}

export default CatalogItem;
