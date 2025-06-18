import clsx from 'clsx';
import { getSelectedTab } from '../../functions';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const selectedTab = getSelectedTab(tabs, activeTabId);

  const { id, content } = selectedTab;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={clsx({ 'is-active': tab.id === id })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                id={tab.id}
                onClick={event => {
                  if (event.target.id !== id) {
                    onTabSelected(event.target.id);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </div>
  );
};
