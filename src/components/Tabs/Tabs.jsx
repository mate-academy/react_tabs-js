import cn from 'classnames';
import { findTab } from '../../functions';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const currentTab = findTab(tabs, selectedTabId);

  const isActive = tab => currentTab.id === tab.id;

  const onTabSelectedHandler = (tab) => {
    if (!isActive(tab)) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={cn({
                'is-active': isActive(tab),
              })}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => onTabSelectedHandler(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab.content}
      </div>
    </div>

  );
};
