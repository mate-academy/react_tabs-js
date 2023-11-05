import cn from 'classnames';

export const TAB_ID = 'id';
export const TAB_TITLE = 'title';
export const TAB_CONTENT = 'content';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const handleClickTab = (tab) => {
    if (tab[TAB_ID] !== tabId) {
      onTabSelected(tab);
    }
  };

  const tabId = !tabs.find(tabItem => tabItem[TAB_ID] === selectedTabId)
    ? tabs[0][TAB_ID]
    : selectedTabId;

  const tabContent = tabs
    .find(tabItem => tabItem[TAB_ID] === tabId)[TAB_CONTENT];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id, title } = tab;

            return (
              <li
                className={cn({ 'is-active': tabId === id })}
                data-cy="Tab"
                key={id}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    handleClickTab(tab);
                  }}
                >
                  {title}
                </a>
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
