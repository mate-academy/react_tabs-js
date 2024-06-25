import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const tabSelected = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames({ 'is-active': tab.id === tabSelected.id })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() =>
                  tab.id !== tabSelected.id && onTabSelected(tab.id)
                }
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabSelected.content}
      </div>
    </div>
  );
};
