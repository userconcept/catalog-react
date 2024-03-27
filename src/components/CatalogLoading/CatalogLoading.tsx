function CatalogLoading({ className }: { className: string; }) {
    return (
        <div className={className ? className : ''}>
            Catalog loading...
        </div>
    );
}

export default CatalogLoading;
