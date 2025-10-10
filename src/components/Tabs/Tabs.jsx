import cn from 'classnames';

export const tabsInfo = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs = ({ onTabSelected, activeTabId }) => {
  const activeTab = tabsInfo.find(tab => tab.id === activeTabId) || tabsInfo[0];

  return (
    <>
      <h1 className="title">{`Selected tab is ${activeTab.title}`}</h1>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <div className="tabs is-boxed">
            <ul>
              {tabsInfo.map(tab => {
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
