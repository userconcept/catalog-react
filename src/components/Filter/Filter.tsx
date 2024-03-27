import Select from '../Select/Select.tsx';

import styles from './Filter.module.scss';

function Filter({
    className,
    onSortByChange,
    onCategoryChange,
    onCurrencyChange
}: {
    className: string;
    onSortByChange: (value: string) => void;
    onCategoryChange: (value: string) => void;
    onCurrencyChange: (value: string) => void;
}) {
    const optionsSortBy = [{
        value: 'desc',
        title: 'Popularity High'
    }, {
        value: 'asc',
        title: 'Popularity Low'
    }];

    const optionsCategory = [{
        value: '',
        title: 'Choose Category'
    }, {
        value: 'liquid',
        title: 'liquid'
    }, {
        value: 'smoke',
        title: 'smoke'
    }, {
        value: 'steel',
        title: 'steel'
    }, {
        value: 'plastic',
        title: 'plastic'
    }, {
        value: 'test',
        title: 'test'
    }];

    const optionsCurrency = [{
        value: '',
        title: 'Choose Currency'
    }, {
        value: 'BTC',
        title: 'BTC'
    }, {
        value: 'ETH',
        title: 'ETH'
    }, {
        value: 'USDT',
        title: 'USDT'
    }, {
        value: 'TON',
        title: 'TON'
    }, {
        value: 'SOL',
        title: 'SOL'
    }, {
        value: 'BSC',
        title: 'BSC'
    }];

    return (
        <div className={[
            styles.Filter,
            className ? className : ''
        ].join(' ')}>
            <div className={styles.Filter__item}>
                <Select
                    className={styles.Filter__Select}
                    id="f-sort"
                    name="f-sort"
                    label="Sort by"
                    options={optionsSortBy}
                    onChange={onSortByChange}
                />
            </div>
            <div className={styles.Filter__item}>
                <Select
                    className={styles.Filter__Select}
                    id="f-category"
                    name="f-category"
                    label="Category"
                    options={optionsCategory}
                    onChange={onCategoryChange}
                />
            </div>
            <div className={styles.Filter__item}>
                <Select
                    className={styles.Filter__Select}
                    id="f-currency"
                    name="f-currency"
                    label="Currency"
                    options={optionsCurrency}
                    onChange={onCurrencyChange}
                />
            </div>
        </div>
    );
}

export default Filter;
