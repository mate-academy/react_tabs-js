import cn from 'classnames';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>

        {tabs.map(tab => (
          <li
            data-cy="Tab"
            className={cn({
              'is-active': tab.id === selectedTab.id,
            })}
            key={tab.id}
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => {
                if (tab.id !== selectedTab.id) {
                  onTabSelected(tab);
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
      {selectedTab.content}
    </div>
  </div>
);
