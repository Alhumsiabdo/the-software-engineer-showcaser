import React from 'react';
import iconsPath from 'bootstrap-icons/bootstrap-icons.svg';

export { Icon };

type IconProps = {
  src: string;
  className?: string;
};
function Icon({ src, className }: IconProps) {
  return (
    <svg
      className={className}
      fill="currentColor"
    >
      <use xlinkHref={`${iconsPath}#${src}`} />
    </svg>
  );
}
