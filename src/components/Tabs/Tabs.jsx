import cn from 'classnames';

export const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <ul>
      {tabs.map(tab => {
        return (
          <li
            key={tab.id}
            data-cy="Tab"
            className={cn({ 'is-active': activeTab === tab.id })}
          >
            <a
              data-cy="TabLink"
              href={`#${tab.id}`}
              onClick={() => {
                setActiveTab(tab.id);
              }}
            >
              {tab.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
