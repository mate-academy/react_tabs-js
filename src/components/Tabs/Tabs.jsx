export const Tabs = ({ tabs, tabSelect, onTabSelected }) => {
  return (
    <>
      {tabs.map(tab => (
        <li
          key={tab.id}
          data-cy="Tab"
          className={tabSelect.id === tab.id ? 'is-active' : ''}
        >
          <a
            href={`#${tab.id}`}
            data-cy="TabLink"
            onClick={e => {
              e.preventDefault();
              if (tabSelect.id !== tab.id) {
                onTabSelected(tab);
              }
            }}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </>
  );
};
