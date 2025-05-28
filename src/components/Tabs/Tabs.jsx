export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  return (
    <>
      {tabs.map(tab => {
        const isActive = tab.id === activeTabId;

        return (
          <li
            key={tab.id}
            className={isActive ? 'is-active' : ''}
            data-cy="Tab"
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={e => {
                e.preventDefault();
                if (!isActive) {
                  onTabSelected(tab.id);
                }
              }}
            >
              {tab.title}
            </a>
          </li>
        );
      })}
    </>
  );
};
