export const Tabs = (
  { tabs,
    selectedTabId,
    onTabSelected },
) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(el => (
          <li
            data-cy="Tab"
            className={(selectedTabId === el.id) ? 'is-active' : ''}
          >
            <a
              href={`#${el.id}`}
              data-cy="TabLink"
              onClick={(e) => {
                if (selectedTabId !== el.id) {
                  onTabSelected(el);
                }
              }}
            >
              {el.title}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      {tabs.find(el => el.id === selectedTabId).content || tabs[0].content}
    </div>
  </div>
);
