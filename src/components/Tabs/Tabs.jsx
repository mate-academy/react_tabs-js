import cn from 'classnames';

export const Tabs = ({
  tabs,
  selectedTab,
  setSelectedTab,
  activeTab,
}) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={cn({ 'is-active': selectedTab === tab.id })}
            data-cy="Tab"
          >
            <a
              onClick={() => setSelectedTab(tab)}
              href={`#${activeTab.id}`}
              data-cy="TabLink"
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      {activeTab.content}
    </div>
  </div>
);
