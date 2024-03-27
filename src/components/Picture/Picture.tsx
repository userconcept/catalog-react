type Props = {
    className: string;
    srcSetAvif: string;
    srcSetWebp: string;
    srcSetJpg: string;
    sizes: string;
    src: string;
    alt: string;
}

function Picture({
    className,
    srcSetAvif,
    srcSetWebp,
    srcSetJpg,
    sizes,
    src,
    alt
}: Props) {
    return (
        <picture className={className ? className : ''}>
            <source
                type="image/avif"
                srcSet={srcSetAvif}
                sizes={sizes}
            />
            <source
                type="image/webp"
                srcSet={srcSetWebp}
                sizes={sizes}
            />
            <img
                srcSet={srcSetJpg}
                sizes={sizes}
                src={src}
                alt={alt}
            />
        </picture>
    );
}

export default Picture;
