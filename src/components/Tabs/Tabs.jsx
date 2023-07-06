import cn from 'classnames';

export const Tabs = ({ tabs, onTabSelected, selectedTabId }) => {
  const currentTab = tabs.find(tab => tab.id === selectedTabId)
  || tabs[0];

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${currentTab.title}`}
      </h1>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                data-cy="Tab"
                className={cn({
                  'is-active': currentTab.id === tab.id,
                })}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (currentTab.id === tab.id) {
                      return;
                    }

                    onTabSelected(tab);
                  }}
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="block" data-cy="TabContent">
          {currentTab.content}
        </div>
      </div>
    </div>
  );
};
