function CatalogNotFound({ className }: { className: string; }) {
    return (
        <div className={className ? className : ''}>
            Catalog items not found...
        </div>
    );
}

export default CatalogNotFound;
