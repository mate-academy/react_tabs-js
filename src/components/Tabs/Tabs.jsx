import classNames from 'classnames';

export const Tabs = ({ tabs, selectedTabId, tabContent, onTabSelected }) => {
  const handleTabClick = (tabId, content) => {
    onTabSelected(tabId, content);
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.title}
              data-cy="Tab"
              className={classNames({
                'is-active': tab.title === selectedTabId,
              })}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleTabClick(tab.title, tab.content)}
              >
                {''}
                {tab.title}
                {''}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabContent}
      </div>
    </div>
  );
};
