import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, setSelectedTabId,
  onTabSelected }) => (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({ 'is-active': selectedTabId === tab.id })}
              key={tab.id}
              data-cy="Tab"
            >
              <a
                onClick={() => onTabSelected(tab.id)}
                href={`#${tab.id}`}
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          ))}

        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.map(tab => (
          `${selectedTabId === tab.id ? tab.content : ''}`
        ))}
      </div>
    </div>
);
