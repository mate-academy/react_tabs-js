export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  function handleClick(event, id) {
    event.preventDefault();
    if (id !== activeTabId) {
      onTabSelected(id);
    }
  }

  // Aqui usamos .find para pegar a primeira tab cujo id seja igual ao activeTab
  const currentTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <>
      <ul>
        {tabs.map(tab => (
          <li
            className={currentTab.id === tab.id ? 'is-active' : ''}
            data-cy="Tab"
            key={tab.id}
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={event => handleClick(event, tab.id)}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="block" data-cy="TabContent">
        {currentTab?.content}
      </div>
    </>
  );
};
