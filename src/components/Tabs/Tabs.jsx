import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => (
  <ul>
    {tabs.map(tab => (
      <li
        key={tab.id}
        data-cy="Tab"
        className={cn({ 'is-active': tab.id === selectedTabId })}
      >
        <a
          data-cy="TabLink"
          href={`#${tab.id}`}
          onClick={() => {
            if (tab.id !== selectedTabId) {
              onTabSelected(tab.id);
            }
          }}
        >
          {tab.title}
        </a>
      </li>
    ))}
  </ul>
);
