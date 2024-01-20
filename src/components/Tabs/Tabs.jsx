import classNames from 'classnames';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={classNames({ 'is-active': selectedTab.id === tab.id })}
            data-cy="Tab"
          >
            <a
              href={`#${tab.id}`}
              onClick={() => {
                if (selectedTab.id === tab.id) {
                  return;
                }

                onTabSelected(tab);
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
