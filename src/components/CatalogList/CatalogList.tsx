import CatalogItem from '../CatalogItem/CatalogItem.tsx';

import { ProductsItem } from '../../types/products.types.ts';

import styles from './CatalogList.module.scss';

type Props = {
    className: string;
    products: [string, ProductsItem][];
}

function CatalogList({ className, products }: Props) {
    const renderProducts = products.map(item => (
        <CatalogItem
            className={styles.CatalogList__CatalogItem}
            product={item}
            key={item[0]}
        />
    ));

    return (
        <ul className={[
            styles.CatalogList,
            className ? className : ''
        ].join(' ')}>
            {renderProducts}
        </ul>
    );
}

export default CatalogList;
