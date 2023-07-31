import classNames from 'classnames';

export const Tabs = ({ tabs, selectedTabId,
  setSelectedTabId, onTabSelected }) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const wrapperForClick = ({ id, title, content }) => {
    if (selectedTab.id !== id) {
      onTabSelected({ id, title, content });
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title, content }, index) => (
            <li
              data-cy="Tab"
              className={classNames({ 'is-active': id === selectedTab.id })}
              key={id}
            >
              <a
                href={`#${id}`}
                data-cy="TabLink"
                onClick={() => {
                  wrapperForClick({ id, title, content });
                }}
              >
                {title}
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
};
