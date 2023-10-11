import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, setSelectedTabId }) => (
  <div className="tabs is-boxed">
    <ul>
      {tabs.map(tab => (
        <li
          key={tab.id}
          data-cy="Tab"
          className={cn(
            { 'is-active': selectedTabId === tab.id
              || (tab.id === tabs[0].id
                && !tabs.find(el => el.id === selectedTabId)) },
          )}
        >
          <a
            href={`#${tab.id}`}
            data-cy="TabLink"
            onClick={() => {
              setSelectedTabId(tab.id);
            }}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
