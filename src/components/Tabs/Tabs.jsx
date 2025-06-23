export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const safeTabId = tabs.find(el => el.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(el => (
            <li
              className={el.id === safeTabId.id ? 'is-active' : ''}
              data-cy="Tab"
              key={el.id}
            >
              <a
                href={`#${el.id}`}
                data-cy="TabLink"
                onClick={() => el.id !== safeTabId.id && onTabSelected(el.id)}
              >
                {el.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {safeTabId.content}
      </div>
    </div>
  );
};
