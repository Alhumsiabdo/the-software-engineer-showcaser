import { SectionContainer } from '#root/components/SectionContainer';
import { Certificate } from '#root/services/ContentLoader/types';
import React from 'react';

export { CertificatesSection };

type CertificatesSectionProps = { certificates: Certificate[] };
function CertificatesSection({ certificates }: CertificatesSectionProps) {
  if (!certificates.length) return null;

  return (
    <SectionContainer title="Certificates">
      <div className="mb-2 space-y-2">
        {certificates.map((cert, index) => (
          <div key={index}>
            <div className="flex items-baseline justify-between font-bold text-gray-700">
              <a href={cert.url} target="_blank" className="underline text-base">
                {cert.name}
              </a>
              <span className="text-sm ml-2">{cert.issuer}</span>
            </div>
            {cert.highlights && cert.highlights.length > 0 && (
              <ul className="mt-1 list-disc list-inside text-sm text-gray-700 space-y-0.5">
                {cert.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
