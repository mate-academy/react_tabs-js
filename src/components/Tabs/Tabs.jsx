export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  function handleTabID(tabId) {
    return tabs.some(el => el.id === tabId) ? tabId : tabs[0].id;
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={`${handleTabID(selectedTabId) === tab.id ? 'is-active' : ''}`}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() =>
                  handleTabID(selectedTabId) !== tab.id && onTabSelected(tab)
                }
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(el => handleTabID(selectedTabId) === el.id).content}
      </div>
    </div>
  );
};

export default Tabs;
