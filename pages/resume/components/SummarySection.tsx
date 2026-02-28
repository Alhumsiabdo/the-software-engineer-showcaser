import { SectionSummary } from '#root/components/SectionSummary';
import React from 'react';
import { LocalizedSection } from './LocalizedSection';
import { useLanguage } from './LanguageSection';
import { BasicInfo } from '#root/services/ContentLoader/types';

export { SummarySection };

type SummarySectionProps = { basicInfo: Omit<BasicInfo, 'profiles'> };
function SummarySection({ basicInfo }: SummarySectionProps) {
    const { getLocalizedContent, currentLanguage } = useLanguage();

    // Get localized basic info if available, otherwise use default
    const localizedBasics = getLocalizedContent('basics');
    const displayInfo = localizedBasics || basicInfo;

    if (!displayInfo.summary) {
        return null; // Do not render if summary doesn't exist
    }

    return (
        <LocalizedSection titleKey="summaryTitle" defaultTitle="Professional Summary">
            <div key={currentLanguage}>
                <SectionSummary content={displayInfo.summary} />
            </div>
        </LocalizedSection>
    );
}
