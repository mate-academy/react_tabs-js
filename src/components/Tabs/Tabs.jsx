export const Tabs = ({ tabs, selectedTabId, onTabSelected, tabContent }) => {
  const handleClickTab = (tabId) => {
    if (tabId !== selectedTabId) {
      onTabSelected(tabId);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id, title } = tab;

            return (
              <li
                className={selectedTabId === id ? 'is-active' : ''}
                data-cy="Tab"
                key={id}
                onClick={() => handleClickTab(id)}
              >
                <a href={`#${id}`} data-cy="TabLink">{title}</a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabContent}
      </div>
    </div>
  );
};
