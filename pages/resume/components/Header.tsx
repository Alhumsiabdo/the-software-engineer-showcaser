import { BasicInfo } from '#root/services/ContentLoader/types';
import React from 'react';

export { Header };

type HeaderProps = { basicInfo: BasicInfo };
function Header({ basicInfo }: HeaderProps) {
  const { name, title, phone, email, profiles } = basicInfo;

  const contactItems: { text: string; url?: string }[] = [
    { text: email.username, url: email.url },
    ...profiles.map((p) => ({ text: p.username, url: p.url })),
  ];

  return (
    <header className="text-center mb-6">
      <h1 className="text-5xl sm:text-6xl print:text-6xl font-bold tracking-tight">
        {basicInfo.nameKerned ? (
          basicInfo.nameKerned.map((item, i) => {
            if (typeof item === 'string') {
              return <span key={i}>{item}</span>;
            }
            return (
              <span key={i} style={{ letterSpacing: item.letterSpacing }}>
                {item.character}
              </span>
            );
          })
        ) : (
          name
        )}
      </h1>
      {title && (
        <p className="mt-1 text-gray-500 text-base sm:text-lg print:text-lg">
          {title}
        </p>
      )}
      <p className="mt-2 text-xs sm:text-base print:text-sm flex flex-wrap justify-center gap-x-1">
        {contactItems.map((item, i) => (
          <React.Fragment key={i}>
            {i > 0 && <span className="text-gray-400">|</span>}
            {item.url ? (
              <a href={item.url} target="_blank">
                {item.text}
              </a>
            ) : (
              <span>{item.text}</span>
            )}
          </React.Fragment>
        ))}
      </p>
    </header>
  );
}
