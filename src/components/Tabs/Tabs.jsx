export const Tabs = ({ selectedTab, onTabSelected, tabs }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { title, id } = tab;

            return (
              <li
                key={id}
                className={`${selectedTab.id === id && 'is-active'}`}
                data-cy="Tab"
              >
                <a
                  onClick={() => {
                    onTabSelected(tab || tabs[0]);
                    console.log(tab);
                  }}
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
