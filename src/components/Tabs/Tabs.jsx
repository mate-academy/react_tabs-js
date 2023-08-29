import cn from 'classnames';

const selectedTab = (tabs, selectedTabId) => tabs
  .find(({ id }) => selectedTabId === id);

export const Tabs = ({
  tabs,
  onTabSelected,
  selectedTabId,
}) => {
  const initialTabId = tabs.some(({ id }) => id === selectedTabId)
    ? selectedTabId
    : tabs[0].id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const isActive = tab.id === initialTabId;

            return (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
              <li
                key={tab.id}
                className={cn({ 'is-active': isActive })}
                data-cy="Tab"
                onClick={() => {
                  if (initialTabId !== tab.id) {
                    onTabSelected(tab);
                  }
                }}
              >
                <a href={`#${tab.id}`} data-cy="TabLink">{tab.title}</a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab(tabs, initialTabId).content}
      </div>
    </div>
  );
};
