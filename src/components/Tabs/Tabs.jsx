import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  const preparedTabs = tabs.map(tab => {
    const { id, title } = tab;

    return (
      <li
        className={cn({
          'is-active': id === activeTab.id,
        })}
        data-cy="Tab"
        key={id}
      >
        <a
          href={`#${id}`}
          data-cy="TabLink"
          onClick={!(id === activeTab.id) ? () => onTabSelected(id) : null}
        >
          {title}
        </a>
      </li>
    );
  });

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>{preparedTabs}</ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};
