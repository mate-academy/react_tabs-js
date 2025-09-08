export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  return (
    <>
      {tabs.map(tab => {
        return (
          <li
            key={tab.id}
            className={tab.id === activeTabId ? 'is-active' : ''}
            data-cy="Tab"
          >
            <a
              onClick={e => {
                e.preventDefault();
                if (tab.id !== activeTabId) {
                  onTabSelected(tab.id);
                }
              }}
              href={`#${tab.id}`}
              data-cy="TabLink"
            >
              {tab.title}
            </a>
          </li>
        );
      })}
    </>
  );
};
