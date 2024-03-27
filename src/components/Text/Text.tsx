import { PropsWithChildren } from 'react';

function Text({
    className,
    children
}: PropsWithChildren<{ className: string; }>) {
    return (
        <p className={className ? className : ''}>{children}</p>
    );
}

export default Text;
