export const Tabs = ({ tabs, selectedTab, onTabSelected }) => {
  const isSelectedTabNotFound = !tabs.some(tab => tab.id === `tab-${selectedTab}`);

  return (
    <ul>
      {tabs.map(tab => (
        <li
          className={(isSelectedTabNotFound && tab.id === 'tab-1') || tab.id.slice(-1) === selectedTab ? 'is-active' : ''}
          onClick={() => onTabSelected(tab.id.slice(-1))}
          key={tab.id}
          data-cy="Tab"
        >
          <a href={`#${tab.id}`} data-cy="TabLink">
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
