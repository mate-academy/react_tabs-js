export const Tab = ({ selectTab, selectedTab, tab }) => {
  return (
    <li
      key={tab.id}
      onClick={() => selectTab(tab)}
      className={`${tab === selectedTab && 'is-active'}`}
      data-cy="Tab"
    >
      <a href={`#${tab.id}`} data-cy="TabLink">
        {tab.title}
      </a>
    </li>
  );
};
