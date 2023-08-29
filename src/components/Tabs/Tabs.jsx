export const Tabs = ({ selectedTabId, setSelectedTabId, tabs }) => {
  const { id, content } = selectedTabId;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={`${id === tab.id ? 'is-active' : null}`}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => setSelectedTabId(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </div>
  );
};
