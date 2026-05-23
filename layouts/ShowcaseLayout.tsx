import React from 'react';

export { ShowcaseLayout };

function ShowcaseLayout({
  children,
  footer,
}: {
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <div className="print:w-print paper:w-paper mx-auto flex w-full origin-top flex-col font-sans md:scale-110 lg:scale-140 xl:scale-160 paper:py-20 print:scale-100">
      <div className="p-6 pt-10 bg-white shadow-none sm:p-8 md:p-16 md:pt-14 paper:shadow-2xl print:bg-white print:p-16 print:pt-20 print:shadow-none">
        {children}
      </div>

      <div className="print:hidden">{footer}</div>
    </div>
  );
}
