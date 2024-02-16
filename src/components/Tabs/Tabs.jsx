import cn from 'classnames';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {/* <li className="is-active" data-cy="Tab">
          <a href="#tab-1" data-cy="TabLink">Tab 1</a>
        </li>

        <li data-cy="Tab">
          <a href="#tab-2" data-cy="TabLink">Tab 2</a>
        </li>

        <li data-cy="Tab">
          <a href="#tab-3" data-cy="TabLink">Tab 3</a>
        </li> */}
        {tabs.map(tab => (
          <li
            data-cy="Tab"
            className={cn({ 'is-active': tab.id === selectedTab.id })}
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => {
                if (tab.id !== selectedTab.id) {
                  onTabSelected(tab);
                }
              }}
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
