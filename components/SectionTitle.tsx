import React from 'react';

export { SectionTitle };

type SectionTitleProps = {
  left?: string;
  middle?: string;
  middleUrl?: string;
  right?: string;
  location?: string;
};
function SectionTitle({
  left,
  right,
  middle,
  middleUrl,
  location,
}: SectionTitleProps) {
  return (
    <div className="grid w-full grid-cols-3 mb-1 font-bold text-gray-700 items-center relative min-h-[40px]">
      {left && (
        <h3 className="col-start-1 col-end-3 sm:col-end-2 print:col-end-2 justify-self-start">
          {left}
        </h3>
      )}
      {middle && (
        <h3 className="col-start-3 col-end-3 text-lg sm:col-start-2 sm:justify-self-center print:justify-self-center print:col-start-2 justify-self-end">
          {middleUrl ? (
            <a href={middleUrl} target="_blank">
              {middle}
            </a>
          ) : (
            middle
          )}
        </h3>
      )}
      {right && (
        <h3 className="col-start-2 col-end-4 text-xs sm:col-start-3 print:col-start-3 justify-self-end sm:text-base print:text-base">
          {right}
        </h3>
      )}
      {location && (
        <p className="text-right text-xs text-gray-500 -mt-1 mb-0.5 sm:text-sm print:text-xs absolute right-0 bottom-0">
          {location}
        </p>
      )}
    </div>
  );
}
