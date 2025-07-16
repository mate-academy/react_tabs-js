export const Tabs = ({ tabs, activeTabId, setActiveTabId }) => {
  return (
    <div data-cy="TabsComponent">
      <h1 className="title">
        Selected tab is {tabs.find(pag => pag.id === activeTabId)?.title}
      </h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(pag => (
            <li
              onClick={e => {
                e.preventDefault();
                setActiveTabId(pag.id);
              }}
              className={pag.id === activeTabId ? 'is-active' : ''}
              key={pag.id}
            >
              <a>{pag.title}</a>
            </li>
          ))}
        </ul>
      </div>

      <p>{tabs.find(pag => pag.id === activeTabId)?.content}</p>
    </div>
  );
};
