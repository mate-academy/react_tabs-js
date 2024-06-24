import cn from 'classnames';
import { checkIfTabExists, getActiveTabById } from '../../utils/helpers';

export const Tabs = ({ activeTabId, onTabSelected, tabs }) => {
  const currentActiveTabId = checkIfTabExists(activeTabId, tabs)
    ? activeTabId
    : tabs[0].id;

  const activeTab = getActiveTabById(currentActiveTabId, tabs);

  const handleTabClick = id => {
    if (id !== currentActiveTabId) {
      onTabSelected(id);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => {
            const isActive = currentActiveTabId === id;

            return (
              <li
                key={id}
                className={cn({
                  'is-active': isActive,
                })}
                data-cy="Tab"
              >
                <a
                  href={`#${id}`}
                  onClick={() => handleTabClick(id)}
                  data-cy="TabLink"
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {activeTab && (
        <div className="block" data-cy="TabContent">
          {activeTab.content}
        </div>
      )}
    </div>
  );
};
