import cn from 'classnames';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {
          tabs.map(tab => (
            <li
              key={tab.id}
              className={cn({ 'is-active': selectedTab === tab })}
              data-cy="Tab"
            >
              <a
                onClick={() => onTabSelected(tab)}
                href="#tab.id"
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
);
