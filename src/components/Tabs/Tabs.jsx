export const Tabs = ({ tabs, selectedTab, onTabSelected }) => {
  const isSelectedTabNotFound = !tabs.some(
    tab => tab.id === `tab-${selectedTab}`,
  );

  return (
    <ul role="tablist">
      {tabs.map(tab => (
        <li
          role="tab"
          aria-selected={
            (isSelectedTabNotFound && tab.id === 'tab-1') ||
            tab.id.slice(-1) === selectedTab
              ? 'true'
              : 'false'
          }
          className={
            (isSelectedTabNotFound && tab.id === 'tab-1') ||
            tab.id.slice(-1) === selectedTab
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
              onTabSelected(tab.id.slice(-1));
            }}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
