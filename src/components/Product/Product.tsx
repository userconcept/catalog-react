import { useParams } from 'react-router-dom';

import Title from '../Title/Title.tsx';
import Picture from '../Picture/Picture.tsx';
import ButtonLike from '../ButtonLike/ButtonLike.tsx';
import Button from '../Button/Button.tsx';

import { useGetProductByIdQuery } from '../../store/api/product.api.ts';

import { ProductsItem } from '../../types/products.types.ts';

import styles from './Product.module.scss';

function Product() {
    const imageUrl = 'https://userconceptart.com';

    const { category, title } = useParams();

    const name = `${category}/${title}`;

    const imageSizes = [
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

    const { data, isLoading } = useGetProductByIdQuery(null);

    const item = data ? data[name] : {} as ProductsItem;

    const itemHref = item.href ? item.href : 'https://opensea.io/userconcept';

    if (isLoading) return null;

    return (
        <section className={styles.Product}>
            <Title
                className={styles.Product__Title}
                level="1"
                size="large"
            >
                {item.title}
            </Title>
            <div className={styles.Product__pictureWrapper}>
                <Picture
                    className={styles.Product__Picture}
                    srcSetAvif={imageSrcSetAvif}
                    srcSetWebp={imageSrcSetWebp}
                    srcSetJpg={imageSrcSetJpg}
                    sizes={imageSizes}
                    src={imageSrc}
                    alt={item.title}
                />
                <ButtonLike
                    className={styles.Product__ButtonLike}
                    largeOnDesktop={true}
                />
            </div>
            <div className={styles.Product__text}>
                Category: {item.category}
            </div>
            <div className={styles.Product__text}>
                Popularity: {item.categories.popularity}
            </div>
            <div className={styles.Product__buttonsWrapper}>
                <Button
                    className={styles.Product__Button}
                    href={itemHref}
                    rel="noopener noreferrer me"
                    target="_blank"
                >
                    Buy item...
                </Button>
                <Button
                    className={styles.Product__Button}
                    to="/catalog"
                >
                    Back to catalog...
                </Button>
            </div>
        </section>
    );
}

export default Product;
