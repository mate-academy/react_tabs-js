import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const validActiveTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  const onTabClick = tabId => {
    if (tabId !== validActiveTab.id) {
      onTabSelected(tabId);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
            <li
              className={classNames({ 'is-active': id === validActiveTab.id })}
              data-cy="Tab"
              key={id}
              onClick={() => onTabClick(id)}
            >
              <a href={`#${id}`} data-cy="TabLink">
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {validActiveTab.content}
      </div>
    </div>
  );
};
