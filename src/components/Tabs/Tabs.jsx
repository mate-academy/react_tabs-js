export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const chooseTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  function onTabSelectedCond(tab) {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {
            tabs.map((tab) => {
              const { id, title } = tab;

              return (
                <li
                  key={id}
                  className={id === chooseTab.id ? 'is-active' : ''}
                  data-cy="Tab"
                >
                  <a
                    href={`#${id}`}
                    onClick={() => onTabSelectedCond(tab)}
                    data-cy="TabLink"
                  >
                    {title}
                  </a>
                </li>
              );
            })
          }
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {
          tabs.map((tab) => {
            const { id, content } = tab;

            return (selectedTabId === id && (
              content
            ));
          })
        }
      </div>
    </div>
  );
};
