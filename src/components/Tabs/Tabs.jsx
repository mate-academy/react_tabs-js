import cn from 'classnames';

export const Tabs = ({ tabs, selectedTab, onTabSelected, selectedTabId }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed" data-cy="tab-content">
      <ul>
        {tabs.map(tab => (
          <li
            className={cn({ 'is-active': selectedTabId === tab.id })}
            data-cy="Tab"
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => onTabSelected(tab)}
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
