export const Tabs = ({ tab, selectedTabId, onTabSelected, setTabItem }) => (
  <li
    data-cy="Tab"
    className={`${selectedTabId === tab.id && 'is-active'}`}
  >
    <a
      onClick={() => {
        onTabSelected(tab.id);
        setTabItem(tab);
      }
      }
      href={`#${tab.id}`}
      data-cy="TabLink"
    >
      {tab.title}

    </a>
  </li>
);
