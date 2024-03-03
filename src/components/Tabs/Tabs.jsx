import cn from 'classnames';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            className={cn({ 'is-active': tab === selectedTab })}
            key={tab.id}
            data-cy="Tab"
          >
            <a
              href={`#${tab.id}`}
              onClick={() => {
                if (tab !== selectedTab) {
                  onTabSelected(tab);
                }
              }}
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
