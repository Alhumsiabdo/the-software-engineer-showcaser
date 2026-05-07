import { SectionContainer } from '#root/components/SectionContainer';
import React from 'react';
import ReactMarkdown from 'react-markdown';

export { SummarySection };

type SummarySectionProps = { summary: string };
function SummarySection({ summary }: SummarySectionProps) {
  return (
    <SectionContainer title="Professional Summary">
      <ReactMarkdown
        className="leading-snug mb-2"
        components={{ p: ({ children }) => <>{children}</> }}
      >
        {summary}
      </ReactMarkdown>
    </SectionContainer>
  );
}
