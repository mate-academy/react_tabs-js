export const Tabs = ({ tabs, onTabSelected, activeTabId }) => {
  return (
    <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
    <ul>
      {tabs.map(({ title, id}) => (
        <li
          className={`${id === activeTabId ? 'is-active' : ''}`}
          data-cy="Tab"
          key={id}
            onClick={() => { id !== activeTabId ? onTabSelected(id) : '';
            }}
          >
          <a
            href={`#${id}`}
            data-cy="TabLink"
          >
            {title}
          </a>
        </li>
      ))}
    </ul>
    </div>
    <div className="block" data-cy="TabContent">
        {tabs.find(el => el.id === activeTabId)?.content}
      </div>
    </div>
  );
};
