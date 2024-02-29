import cn from 'classnames';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
              <li
                className={cn({
                  'is-active': selectedTab.id === tab.id,
                })}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  onClick={() => onTabSelected(tab)}
                  data-cy="TabLink"
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
