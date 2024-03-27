import styles from './ButtonLike.module.scss';

type Props = {
    className: string;
    largeOnDesktop?: boolean;
}

function ButtonLike({ className, largeOnDesktop }: Props) {
    const cnBlock = styles.ButtonLike;
    const cnModifier = largeOnDesktop ? styles.ButtonLike_largeOnDesktop : '';
    const cnMix = className;

    const cn = [cnBlock, cnModifier, cnMix].filter(v => !!v).join(' ');

    return (
        <button className={cn}>
            <svg className={styles.ButtonLike__icon} width="24" height="24">
                <use xlinkHref="#icon_like"></use>
            </svg>
            <span className={styles.ButtonLike__text}>
                Like
            </span>
        </button>
    );
}

export default ButtonLike;
