import cn from 'classnames';

export const Tabs = ({ onTabSelected, activeTabId, tabs }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <>
      <h1 className="title">{`Selected tab is ${activeTab.title}`}</h1>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <div className="tabs is-boxed">
            <ul>
              {tabs.map(tab => {
                return (
                  <li
                    key={tab.id}
                    className={cn({
                      'is-active': activeTab.id === tab.id,
                    })}
                    data-cy="Tab"
                  >
                    <a
                      href={`#${tab.id}`} // "#tab-1"
                      data-cy="TabLink"
                      onClick={() => {
                        if (activeTab.id !== tab.id) {
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
          {activeTab.content}
        </div>
      </div>
    </>
  );
};
