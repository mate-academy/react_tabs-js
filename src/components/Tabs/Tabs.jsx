export const Tabs = ({ selectedTabId, tabs, onTabSelected }) => {
  const verifyId = tabs.find(tab => tab.id === selectedTabId)
    ? selectedTabId
    : tabs[0].id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tabData => (
            <li
              data-cy="Tab"
              {...(tabData.id === verifyId && {
                className: 'is-active',
              })}
              key={tabData.id}
            >
              <a
                href={`#${tabData.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (verifyId !== tabData.id) {
                    onTabSelected(tabData);
                  }
                }}
              >
                {tabData.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.map(({ id, content }) => id === verifyId && content)}
      </div>
    </div>
  );
};
