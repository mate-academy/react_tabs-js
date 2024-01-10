import classNames from 'classnames';

export const Tabs = ({ tabs, setCurrentTab, currentTab }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map((tab) => {
          const isCurrent = tab === currentTab;

          return (
            <li
              className={classNames({ 'is-active': isCurrent })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (currentTab !== tab) {
                    setCurrentTab(tab);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      {currentTab.content}
    </div>
  </div>
);
