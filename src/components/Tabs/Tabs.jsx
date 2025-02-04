import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  let tabActive = tabs.find(tab => tab.id === activeTabId);
  let activeTab = activeTabId;

  if (tabActive === undefined && tabs.length !== 0) {
    tabActive = { ...tabs[0] };
    activeTab = tabs[0].id;
  }

  return (
    <div className="section">
      <h1 className="title">
        {tabActive === undefined
          ? 'No tab selected'
          : `Selected tab is ${tabActive.title}`}
      </h1>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => {
              return (
                <li
                  key={tab.id}
                  className={activeTab === tab.id ? 'is-active' : ''}
                  data-cy="Tab"
                >
                  <a
                    href={`#${tab.id}`}
                    data-cy="TabLink"
                    onClick={() => {
                      if (activeTab !== tab.id) {
                        onTabSelected(tab.id);
                      }
                    }}
                  >
                    {tab.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="block" data-cy="TabContent">
        {tabActive.content}
      </div>
    </div>
  );
};
