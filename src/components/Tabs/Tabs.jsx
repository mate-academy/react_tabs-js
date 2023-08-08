import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const { id: currentId, content: currentContent } = tabs.find(
    tab => tab.id === selectedTabId,
  ) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id: tabId, title: tabTitle } = tab;

            return (
              <li
                className={cn({ 'is-active': tabId === currentId })}
                data-cy="Tab"
                key={tabId}
              >
                <a
                  href={`#${tabId}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (currentId !== tabId) {
                      onTabSelected(tab);
                    }
                  }}
                >
                  {tabTitle}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentContent}
      </div>
    </div>
  );
};
