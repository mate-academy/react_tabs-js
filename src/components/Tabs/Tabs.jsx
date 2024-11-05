/* eslint-disable import/no-extraneous-dependencies */
import clsx from 'clsx';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  return (
    <ul>
      {tabs.map(tab => {
        const isActive = activeTabId === tab.id;

        return (
          <li
            key={tab.id}
            className={clsx(isActive && 'is-active')}
            data-cy="Tab"
          >
            <a
              onClick={() => {
                if (!isActive) {
                  onTabSelected(tab.id);
                }
              }}
              href={`#${tab.id}`}
              data-cy="TabLink"
            >
              {tab.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
