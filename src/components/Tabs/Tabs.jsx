export const Tabs = ({ selectedTab, onTabSelected, tabs }) => {
  const handleClick = (tab, curId) => {
    if (selectedTab.id !== curId) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ title, id }, i) => {
            const activeClass = selectedTab.id === id ? 'is-active' : '';

            return (
              <li key={id} className={`${activeClass}`} data-cy="Tab">
                <a
                  onClick={() => handleClick(tabs[i])}
                  href={`#${id}`}
                  data-cy="TabLink"
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
