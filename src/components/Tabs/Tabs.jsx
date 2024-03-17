import cn from 'classnames';

export const Tabs = ({ tabs, selectedTab, setSelectedTab }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            data-cy="Tab"
            className={cn({ 'is-active': selectedTab === tab })}
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => setSelectedTab(tab)}
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
