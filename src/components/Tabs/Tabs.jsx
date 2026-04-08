export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  // se não existir activeTabId válido → pega o primeiro
  const activeTab =
    tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div>
      <ul>
        {tabs.map(tab => {
          const isActive = tab.id === activeTab.id;

          return (
            <li
  key={tab.id}
  data-cy="Tab"
  className={isActive ? 'is-active' : ''}
>
  <a
    data-cy="TabLink"
    href={`#${tab.id}`}
    onClick={(e) => {
      e.preventDefault();

      if (!isActive) {
        onTabSelected(tab.id);
      }
    }}
  >
    {tab.title}
  </a>
</li>
          );
        })}
      </ul>

      <div data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};