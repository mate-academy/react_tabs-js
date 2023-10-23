import classNames from 'classnames';

export const Tabs = ({ tabs, onTabSelect, selectTabId }) => {
  const selectedTab = tabs.find(tab => tab.id === selectTabId) || tabs[0];
  const handleClick = (tab) => {
    if (selectTabId !== tab.id) {
      onTabSelect(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              classNames={classNames({
                'is-active': selectTabId === tab.id,
              })}
            >
              <a
                href={`#${tab.id}`}
                onClick={() => handleClick(tab)}
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
};
