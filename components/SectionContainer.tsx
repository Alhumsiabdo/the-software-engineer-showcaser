import React from 'react';

export { SectionContainer };

type SectionContainerProps = { title: string; children?: React.ReactNode };
function SectionContainer({ title, children }: SectionContainerProps) {
  return (
    <section className="mb-7">
      <h2 className="text-xl uppercase font-bold">{title}</h2>
      <span className="block h-px w-full bg-black mt-0.5 mb-3"></span>
      {children}
    </section>
  );
}
