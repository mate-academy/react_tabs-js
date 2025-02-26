export const Tabs = ({ tab, selectedTab, setSelectedTab }) => {
  return (
    <li className={tab.id === selectedTab ? 'is-active' : ''} data-cy="Tab">
      <a
        href={`#${tab.id}`}
        data-cy="TabLink"
        onClick={() => {
          if (tab.id !== selectedTab) {
            setSelectedTab(tab.id);
          }
        }}
      >
        {tab.title}
      </a>
    </li>
  );
};
