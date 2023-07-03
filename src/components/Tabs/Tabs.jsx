import classNames from 'classnames';

export const Tabs = ({
  tabs,
  selectedTab,
  setsSelectedTab,
}) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            data-cy="Tab"
            key={tab.id}
            className={classNames({ 'is-active': tab.id === selectedTab.id })}
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => (
                tab.id !== selectedTab.id && setsSelectedTab(tab)
              )}
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
