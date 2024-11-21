import cn from 'classnames';

import { findByIdOrGetFirst } from '../../util/helpers';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = findByIdOrGetFirst(activeTabId, tabs);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => {
            const isActive = activeTab?.id === id;

            return (
              <li
                className={cn({ 'is-active': isActive })}
                data-cy="Tab"
                key={id}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => !isActive && onTabSelected(id)}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab?.content}
      </div>
    </div>
  );
};
