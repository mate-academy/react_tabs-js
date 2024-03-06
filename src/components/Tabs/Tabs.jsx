export const Tabs = ({ tabs, activeTab, setActiveTab}) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li className={''} data-cy="Tab" key={tab.id}>
            <a
              href={tab.id}
              data-cy="TabLink"
              onClick={() => setActiveTab(tab)}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
