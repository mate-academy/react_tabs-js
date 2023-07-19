const TabContent = ({ tab }) => (
  <div
    className="block"
    data-cy="TabContent"
  >
    {tab.content}
  </div>
);

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  let activeTabId = selectedTabId;

  if (!tabs.some(tab => tab.id === selectedTabId)) {
    activeTabId = tabs[0].id;
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const isActive = activeTabId === tab.id;

            return (
              <li
                className={isActive ? 'is-active' : ''}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (!isActive) {
                      onTabSelected(tab);
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
      {tabs.map(tab => (
        selectedTabId === tab.id
        && <TabContent key={tab.id} tab={tab} />
      ))}
    </div>
  );
};
