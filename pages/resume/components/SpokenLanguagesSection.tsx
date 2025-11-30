import React from 'react';
import { SpokenLanguage } from '#root/services/ContentLoader/types';
import { useLanguage } from './LanguageSection';

export { SpokenLanguagesSection };

type SpokenLanguagesSectionProps = {
    languages: SpokenLanguage[];
};

function SpokenLanguagesSection({ languages }: SpokenLanguagesSectionProps) {
    const { getLocalizedContent } = useLanguage();
    const title = getLocalizedContent('languagesTitle') || 'Languages';

    return (
        <section className="mb-8 mt-4 flex flex-col items-center text-center">
            <h2 className="mb-4 text-2xl font-bold uppercase tracking-widest">{title}</h2>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
                {languages.map((lang, index) => (
                    <div key={index} className="flex items-center text-lg">
                        <span className="font-bold text-gray-800">{lang.language}</span>
                        <span className="mx-2 text-gray-400">|</span>
                        <span className="font-medium text-gray-600">{lang.fluency}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
