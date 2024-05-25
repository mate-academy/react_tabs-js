export const Tabs = ({ activeTabId, tabs, onTabSelected }) => {
  let active = activeTabId;

  if (!tabs.find(tab => tab.id === active)) {
    active = tabs[0].id;
  }

  const handleClick = (e, id) => {
    if (!e.target.href.includes(active)) {
      onTabSelected(id);
    }
  };

  const { content } = tabs.find(tab => tab.id === active);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={tab.id === active ? 'is-active' : null}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={e => handleClick(e, tab.id)}
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
