import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            className={cn({ 'is-active': selectedTabId === tab.id })}
            data-cy="Tab"
            key={tab.id}
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => onTabSelected(tab.id)}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      {tabs.find(tab => tab.id === selectedTabId).content}
    </div>
  </div>
);
