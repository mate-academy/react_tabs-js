/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  if (!tabs || tabs.length === 0) {
    return null;
  }

  const currentActiveId =
    tabs.find(tab => tab.id === activeTabId)?.id || tabs[0].id;
  const activeContent = tabs.find(tab => tab.id === currentActiveId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === currentActiveId ? 'is-active' : ''}
              data-cy="Tab"
              onClick={() => {
                if (tab.id !== currentActiveId) onTabSelected(tab.id);
              }}
            >
              <a href={`#${tab.id}`} data-cy="TabLink">
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeContent?.content}
      </div>
    </div>
  );
};
