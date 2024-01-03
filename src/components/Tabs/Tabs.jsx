import cn from 'classnames';

export const Tabs = ({ tabs, activeTab, setActiveTab }) => (
  <ul>
    {tabs.map(tab => (
      <li
        data-cy="Tab"
        key={tab.id}
        className={cn({
          'is-active': tab.id === activeTab.id,
        })}
      >
        <a href={`#${tab.id}`} data-cy="TabLink" onClick={() => setActiveTab(tab)}>
          {tab.title}
        </a>
      </li>
    ))}
  </ul>
);
