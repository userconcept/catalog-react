import { useState, useMemo } from 'react';

import Title from '../Title/Title.tsx';
import Filter from '../Filter/Filter.tsx';
import CatalogList from '../CatalogList/CatalogList.tsx';
import CatalogLoading from '../CatalogLoading/CatalogLoading.tsx';
import CatalogNotFound from '../CatalogNotFound/CatalogNotFound.tsx';
import Button from '../Button/Button.tsx';

import { useGetProductsQuery } from '../../store/api/api.ts';

import styles from './Catalog.module.scss';

function Catalog() {
    const { data, isLoading } = useGetProductsQuery(null);

    const [sortBy, setSortBy] = useState<string>('desc');
    const [category, setCategory] = useState<string>('');
    const [currency, setCurrency] = useState<string>('');
    const [count, setCount] = useState<number>(4);

    const preparedData = useMemo(() => {
        if (!data) return [];

        return Object.entries(data).sort((a, b) => {
            if (sortBy === 'asc') {
                return (
                    a[1].categories.popularity - b[1].categories.popularity
                );
            } else {
                return (
                    b[1].categories.popularity - a[1].categories.popularity
                );
            }
        })
        .filter(item => {
            if (category && currency) {
                return (
                    item[1].category === category
                    && Object.keys(item[1].currency).includes(currency)
                );
            } else if (category) {
                return item[1].category === category;
            } else if (currency) {
                return Object.keys(item[1].currency).includes(currency);
            } else {
                return true;
            }
        })
        .slice(0, count)
    }, [data, sortBy, category, currency, count]);

    const onSortByChange = (value: string) => {
        setSortBy(value);
    };

    const onCategoryChange = (value: string) => {
        setCategory(value);
    };

    const onCurrencyChange = (value: string) => {
        setCurrency(value);
    };

    const handleClick = () => {
        setCount(prev => prev + 4);
    };

    return (
        <section className={styles.Catalog}>
            <Title
                className={styles.Catalog__Title}
                level="1"
                size="large"
            >
                Catalog
            </Title>
            <Filter
                className={styles.Catalog__Filter}
                onSortByChange={onSortByChange}
                onCategoryChange={onCategoryChange}
                onCurrencyChange={onCurrencyChange}
            />
            {isLoading ?
                <CatalogLoading className={styles.Catalog__CatalogLoading} />
            : preparedData?.length ?
                <CatalogList
                    className={styles.Catalog__CatalogList}
                    products={preparedData}
                />
            : <CatalogNotFound className={styles.Catalog__CatalogNotFound} />}
            <Button
                className={styles.Catalog__Button}
                onClick={handleClick}
            >
                Load more...
            </Button>
        </section>
    );
}

export default Catalog;
