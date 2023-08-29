import cn from 'classnames';

export const Tabs = ({ selectedTab, tabs, selectedTabId, onTabSelected }) => (
  <>
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={cn({ [`is-active`]: tab.id === selectedTab.id })}
              data-cy="Tab"
            >
              <a
                onClick={() => {
                  onTabSelected(tab);
                }}
                href={`#${tab.id}`}
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          ))
          }
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  </>
);
