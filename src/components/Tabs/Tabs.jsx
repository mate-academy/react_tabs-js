import cn from 'classnames';
import { getById } from '../../helpers';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const selectedTab = getById(tabs, selectedTabId) || tabs[0];

  const tabHandler = (tab) => {
    if (tab.id !== selectedTabId) {
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
                key={id}
                className={cn({
                  'is-active': id === selectedTab.id,
                })}
                data-cy="Tab"
              >
                <a
                  onClick={() => tabHandler(tab)}
                  href={`#${id}`}
                  data-cy="TabLink"
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
