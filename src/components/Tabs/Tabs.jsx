import cn from 'classnames';

export const Tabs = ({ tabs, setSelectedTab, activeTab, setActiveTab }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map((tab, index) => (
          <li
            key={tab.id}
            data-cy="Tab"
            className={cn({
              'is-active': index === activeTab,
            })}
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => {
                setActiveTab(index);
                setSelectedTab(tab);
              }}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
