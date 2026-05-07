import React from 'react';
import { usePageContext } from './usePageContext';

export { Link };

function Link(props: { href?: string; className?: string; children: React.ReactNode }) {
    const pageContext = usePageContext();
    const locale = pageContext.locale || 'en';
    let { href } = props;

    if (!href) return <a {...props} />;

    if (href.startsWith('/') && !href.startsWith('//')) {
        // Handle root path
        if (href === '/') {
            href = `/${locale}`;
        } else {
            href = `/${locale}${href}`;
        }
    }

    return <a {...props} href={href} />;
}
