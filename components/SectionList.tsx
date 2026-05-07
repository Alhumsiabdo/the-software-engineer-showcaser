import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Icon } from './Icon';

export { SectionList };

export enum ListType {
  BULLET,
  CHECKMARK,
}

type SectionListProps = {
  type: ListType;
  points: string[];
};
function SectionList({ type, points }: SectionListProps) {
  const icon = type === ListType.BULLET ? 'dot' : 'check-circle-fill';

  const ListMembers = points.map((content, index) => {
    return (
      <li
        className="flex flex-row items-start gap-2 leading-[1.66rem]"
        key={index}
      >
        <Icon
          className={`min-w-[18px] max-w-[18px] w-[18px] h-[18px] sm:min-w-[12px]sm: sm:max-w-[12px] sm:w-[12px] sm:h-[12px] print:min-w-[12px]sm: print:max-w-[12px] print:w-[12px] print:h-[12px] sm:mt-0.5 mt-1 ${
            ListType.BULLET === type ? 'scale-150' : 'text-gray-500'
          }`}
          src={icon}
        />

        <ReactMarkdown children={content} className="whitespace-pre-wrap" />
      </li>
    );
  });

  return <ul className="sm:ml-2">{ListMembers}</ul>;
}
