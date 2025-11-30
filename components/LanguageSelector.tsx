import React, { useState } from 'react';
import { useTranslation } from '../renderer/useTranslation';
import { Icon } from './Icon';

export function LanguageSelector() {
    const { locale } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const changeLanguage = (newLocale: string) => {
        if (newLocale === locale) {
            setIsOpen(false);
            return;
        }

        const currentPath = window.location.pathname;
        let pathWithoutLocale = currentPath;
        if (currentPath.startsWith('/en')) {
            pathWithoutLocale = currentPath.replace('/en', '');
        } else if (currentPath.startsWith('/de')) {
            pathWithoutLocale = currentPath.replace('/de', '');
        }

        // Ensure path starts with /
        if (!pathWithoutLocale.startsWith('/')) {
            pathWithoutLocale = '/' + pathWithoutLocale;
        }

        // Construct new URL
        const newUrl = `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
        window.location.href = newUrl;
    };

    return (
        <div className="fixed top-4 right-4 z-50">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 rounded-full bg-black/30 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-black/40"
            >
                <Icon src="globe" width={16} height={16} />
                <span>{locale === 'en' ? 'English' : 'Deutsch'}</span>
                <Icon src="chevron-down" width={12} height={12} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-32 overflow-hidden rounded-xl bg-white/90 py-1 text-black shadow-lg backdrop-blur-md">
                    <button
                        onClick={() => changeLanguage('en')}
                        className={`block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 ${locale === 'en' ? 'font-bold text-blue-600' : ''}`}
                    >
                        English
                    </button>
                    <button
                        onClick={() => changeLanguage('de')}
                        className={`block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 ${locale === 'de' ? 'font-bold text-blue-600' : ''}`}
                    >
                        Deutsch
                    </button>
                </div>
            )}
        </div>
    );
}
