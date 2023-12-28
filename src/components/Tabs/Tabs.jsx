export const Tabs = ({ tabsArr, onTabSelected, selected }) => {
  const selectedTab = tabsArr.find(t => t.id === selected) || tabsArr[0];

  const selectTabHadler = (nId) => {
    const selTab = tabsArr.find(t => t.id === nId) || tabsArr[0];
    if (selTab.id !== selected) {
      onTabSelected(selTab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabsArr.map(tab => (
            <li
              className={selected === tab.id ? 'is-active' : ''}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href="#{tab.id}"
                id={tab.id}
                data-cy="TabLink"
                onClick={evt => selectTabHadler(evt.target.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
