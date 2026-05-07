import React from 'react';
import { Icon } from '#root/components/Icon';

export { DeploymentInfo };

function DeploymentInfo() {
  return (
    <div className="flex flex-col items-center justify-center pb-4 space-y-2 text-gray-600 sm:mt-10 sm:flex-row sm:space-y-0 sm:pb-0">
      <a
        href="https://github.com/arabyalhomsi/the-software-engineer-showcaser/actions"
        target="_blank"
      >
        <img
          src="https://github.com/arabyalhomsi/the-software-engineer-showcaser/actions/workflows/deploy-github-pages.yml/badge.svg"
          alt="deployment tag"
          className="h-5 mx-3"
        />
      </a>
      <a
        href="https://github.com/arabyalhomsi/the-software-engineer-showcaser"
        className="flex flex-row items-center gap-2"
      >
        <span>View the source on Github</span>
        <Icon src="github" className='w-5 h-5' />
      </a>
    </div>
  );
}
