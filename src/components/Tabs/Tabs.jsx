export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {

  return (
    tabs.map(tab => {
      return (
        <li
          className={tab.id === activeTabId ? "is-active" : ''}
          data-cy="Tab"
          key={tab.id}
          onClick={() => onTabSelected(tab.id)}
        >
          <a href={"#" + tab.id} data-cy="TabLink">
          {tab.title}
          </a>
        </li>
      );
    })
  );
};
