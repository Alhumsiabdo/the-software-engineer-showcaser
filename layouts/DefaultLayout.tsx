import React from 'react';

export { DefaultLayout };

import { LanguageSelector } from '#root/components/LanguageSelector';

function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <LanguageSelector />
      {children}
    </div>
  );
}
