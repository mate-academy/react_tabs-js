import cn from 'classnames';
import 'bulma/css/bulma.css';

export const Tabs = ({ tabs, onTabSelected, selectedTabId }) => {
  const DEFAULT_TAB = tabs[0];
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || DEFAULT_TAB;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn(
                { 'is-active': tab.id === selectedTab.id },
              )}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => selectedTab.id !== tab.id
                  && onTabSelected(tab)
                }
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
