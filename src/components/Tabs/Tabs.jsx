export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const tabContent = tabs.find(tab => tab.id === activeTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === activeTabId ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={event => {
                  const listItem = event.target.parentNode;

                  // chama onTabSelected somente se o li (parentNode) nao contem a classe 'is-active'
                  if (!listItem.classList.contains('is-active')) {
                    // onTabSelected(tab.id, tab.content, event);
                    onTabSelected(tab.id);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabContent.content}
      </div>
    </div>
  );
};
