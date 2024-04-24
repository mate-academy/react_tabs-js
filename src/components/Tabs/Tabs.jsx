import classNames from 'classnames';

export const Tabs = ({ tabs, onTabSelected, activeTabId }) => {
  const activeTabObject = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={classNames({
                'is-active': activeTabObject.id === tab.id,
              })}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() =>
                  tab.id !== activeTabId ? onTabSelected(tab.id) : ''
                }
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTabObject.content}
      </div>
    </div>
  );
};
