import cn from 'classnames';

export const Tabs = ({ activeTabId, tabs, onTabSelected }) => {
  const activeTab =
    activeTabId && tabs.find(tab => tab.id === activeTabId)
      ? activeTabId
      : tabs[0].id;

  return (
    <ul>
      {tabs.map(tab => (
        <li
          key={tab.id}
          data-cy="Tab"
          className={cn({ 'is-active': activeTab === tab.id })}
        >
          <a
            href={`#${tab.id}`}
            data-cy="TabLink"
            onClick={e => {
              /* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }] */

              e.preventDefault();
              activeTab !== tab.id && onTabSelected(tab.id);
            }}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
