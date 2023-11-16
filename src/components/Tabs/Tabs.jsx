export const Tabs = ({ tabs, onTabSelected, selectedTabId }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            className={`${
              tab.id === selectedTabId
              || (!tabs.find(tabWithTheID => tabWithTheID.id === selectedTabId)
              && tab.id === tabs[0].id)
                ? 'is-active'
                : ''
            }`}
            data-cy="Tab"
            key={tab.id}
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => {
                if (tab.id !== selectedTabId) {
                  onTabSelected(tab);
                }
              }}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      {tabs.find(tab => tab.id === selectedTabId)
        ? tabs.find(tab => tab.id === selectedTabId).content
        : tabs.find(tab => tab.id === tabs[0].id).content}
    </div>
  </div>
);
