
import { PageContextServer } from './types';

export { onBeforeRoute };

async function onBeforeRoute(pageContext: PageContextServer) {
    const { urlOriginal } = pageContext;
    const urlWithoutHash = urlOriginal.split('#')[0];
    const urlParts = urlWithoutHash.split('/');
    const firstPart = urlParts[1];

    let locale = 'en';
    let urlWithoutLocale = urlWithoutHash;

    if (firstPart === 'en' || firstPart === 'de') {
        locale = firstPart;
        urlWithoutLocale = '/' + urlParts.slice(2).join('/');
    }

    return {
        pageContext: {
            locale,
            urlOriginal: urlWithoutLocale,
        },
    };
}
