import classnames from 'classnames';
import { findTab } from '../../functions';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const selectedTab = findTab(tabs, selectedTabId);

  const isActive = ({ id }) => selectedTab.id === id;

  const handleTabSelect = (tab) => {
    if (!isActive(tab)) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id, title } = tab;

            return (
              <li
                data-cy="Tab"
                key={id}
                className={classnames({
                  'is-active': isActive(tab),
                })}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => handleTabSelect(tab)}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>

  );
};
