import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected, selectedTab }) => {
  const handleTabClick = (tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div
        className="tabs is-boxed"
        data-cy="tab-content"
      >
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={cn({ 'is-active': tab.id === selectedTabId })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                onClick={() => handleTabClick(tab)}
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="block"
        data-cy="TabContent"
      >
        {selectedTab.content}
      </div>
    </div>
  );
};
