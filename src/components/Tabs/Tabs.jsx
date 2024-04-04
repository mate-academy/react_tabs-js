export const Tabs = ({ tabs, selectedTab, onTabSelected }) => {
  const isSelectedTabNotFound = !tabs.some(tab => tab.id === selectedTab.id);

  return (
    <ul role="tablist">
      {tabs.map(tab => (
        <li
          role="tab"
          aria-selected={
            (isSelectedTabNotFound && tab.id === 'tab-1') ||
            tab.id === selectedTab.id
              ? 'true'
              : 'false'
          }
          className={
            (isSelectedTabNotFound && tab.id === 'tab-1') ||
            tab.id === selectedTab.id
              ? 'is-active'
              : ''
          }
          key={tab.id}
          data-cy="Tab"
        >
          <a
            href={`#${tab.id}`}
            data-cy="TabLink"
            onClick={() => {
              onTabSelected(tab.id);
            }}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
