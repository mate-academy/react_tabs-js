export const Tabs = ({ tabs, activeTabId, setActiveTabId }) => {
  const setClassName = tabId => {
    return tabId === activeTabId ? 'is-active' : '';
  };

  const setOnClick = tabId => tabId !== activeTabId && setActiveTabId(tabId);

  return [...tabs].map(({ id, title }) => (
    <li key={id} className={setClassName(id, activeTabId)} data-cy="Tab">
      <a href={`#${id}`} onClick={() => setOnClick(id)} data-cy="TabLink">
        {title}
      </a>
    </li>
  ));
};
