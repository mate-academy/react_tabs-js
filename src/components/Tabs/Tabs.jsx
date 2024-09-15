import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeID =
    tabs.filter(tab => tab.id === activeTabId).length !== 0
      ? activeTabId
      : tabs[0].id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              className={classNames({ 'is-active': id === activeID })}
              data-cy="Tab"
              key={id}
            >
              <a
                href={`#${id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (id === activeID) {
                    return;
                  }

                  onTabSelected(id);
                }}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.filter(tab => tab.id === activeID)[0].content}
      </div>
    </div>
  );
};
