import { Icon } from '#root/components/Icon';
import React from 'react';

export { AddressBar, NavLink };

type AddressBarProps = {
  links: {
    icon: string;
    username: string;
    url: string;
  }[];
};

function AddressBar({ links }: AddressBarProps) {
  const NavLinks = links.map((link, index) => {
    return (
      <React.Fragment key={index}>
        <NavLink href={link.url} icon={link.icon} key={index}>
          <span className='hidden sm:inline print:inline'>{link.username}</span>
        </NavLink>
        {links.length - 1 !== index && (
          <span className="invisible sm:visible print:visible">|</span>
        )}
      </React.Fragment>
    );
  });

  return (
    <address className="flex flex-wrap items-center justify-end w-full space-x-2 text-base not-italic sm:space-x-0 sm:justify-between print:justify-between sm:flex-row print:flex-row">
      {NavLinks}
    </address>
  );
}

type NavLinkProps = { href: string; icon: string; children: React.ReactNode };
function NavLink({ href, icon, children }: NavLinkProps) {
  return (
    <a href={href} target="_blank" className="flex flex-row items-center gap-2">
      <Icon src={icon} className='w-5 h-5 sm:w-4 sm:h-4' />
      {children}
    </a>
  );
}
