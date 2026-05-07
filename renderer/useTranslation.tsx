import { usePageContext } from './usePageContext';
import { en } from '../locales/en';
import { de } from '../locales/de';

const translations = {
    en,
    de,
};

export function useTranslation() {
    const pageContext = usePageContext();
    const locale = pageContext.locale || 'en';
    const t = (key: keyof typeof en) => {
        return translations[locale as keyof typeof translations][key] || key;
    };
    return { t, locale };
}
