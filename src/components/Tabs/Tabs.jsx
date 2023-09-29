export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
  selectedTab,
}) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(({ id, title }) => {
          function changeTab() {
            if (selectedTabId !== id) {
              onTabSelected(id);
            }
          }

          return (
            <li
              className={selectedTabId === id && 'is-active'}
              data-cy="Tab"
              key={id}
            >
              <a
                href={`#${id}`}
                data-cy="TabLink"
                onClick={changeTab}
              >
                {title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      {selectedTab.content}
    </div>
  </div>
);
