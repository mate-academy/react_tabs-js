export const Tabs = ({ tabs, activeTab, onTabClick }) => {
  return (
    <ul>
      {tabs.map(tab => (
        <li
          className={activeTab === tab.id ? 'is-active' : ''}
          data-cy="Tab"
          key={tab.id}
        >
          <a
            data-cy="TabLink"
            href={`#${tab.id}`}
            onClick={() => onTabClick(tab.id)}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
